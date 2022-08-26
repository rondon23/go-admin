package database

import (
	"github.com/rondon23/go-admin/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func Connect() {
	database, err := gorm.Open(mysql.Open("developer:1234567@/go_admin"), &gorm.Config{})

	if err != nil {
		panic("Could not connect to the database")
	}

	database.AutoMigrate(&models.User{})
}
