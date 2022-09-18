package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/rondon23/go-admin/database"
	"github.com/rondon23/go-admin/models"
)

func AllPermissions(c *fiber.Ctx) error {
	var permissions []models.Permission

	database.DB.Find(&permissions)

	return c.JSON(permissions)
}
