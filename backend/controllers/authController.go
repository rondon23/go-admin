package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/rondon23/go-admin/models"
)

func Register(c *fiber.Ctx) error {
	user := models.User{
		FirstName: "John",
	}

	user.LastName = "Doe"

	return c.JSON(user)
}
