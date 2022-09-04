package database

import (
	"fmt"
	"waysbeans/models"
	"waysbeans/pkg/mysql"
)

func RunMigration() {
	err := mysql.DB.AutoMigrate(
		// &models.Cart{},
		// &models.Product{},
		// &models.Profile{},
		// &models.Topping{},
		// &models.Transaction{},
		&models.User{},
	)

	if err != nil {
		fmt.Println(err)
		panic("Migration Failed")
	}

	fmt.Println("Migration Success")
}
