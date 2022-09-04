package models

import "time"

type Cart struct {
	ID            int       `json:"id" gorm:"primary_key:auto_increment"`
	Qty           int       `json:"qty" gorm:"default:1"`
	UserID        int       `json:"userID" gorm:"column:user_id"`
	ProductID     int       `json:"prouductID" gorm:"column:product_id"`
	TransactionID *int      `json:"transactionID" gorm:"column:transaction_id"`
	CreatedAt     time.Time `json:"-" gorm:"column:created_at"`
	UpdatedAt     time.Time `json:"updatedAt" gorm:"column:updated_at"`
}
