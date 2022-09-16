package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/rondon23/go-admin/database"
	"github.com/rondon23/go-admin/models"
	"golang.org/x/crypto/bcrypt"
)

func AllUsers(c *fiber.Ctx) error {
	var users []models.User

	database.DB.Find(&users)

	return c.JSON(users)
}

func CreateUser(c *fiber.Ctx) error {
	var user models.User

	if err := c.BodyParser(&user); err != nil {
		return err
	}

	password, _ := bcrypt.GenerateFromPassword([]byte("1234"), 14)

	user.Password = password

	database.DB.Create(&user)

	return c.JSON(user)
}
