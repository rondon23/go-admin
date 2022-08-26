package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/rondon23/go-admin/controllers"
)

func Setup(app *fiber.App) {
	app.Post("/api/register", controllers.Register)
}