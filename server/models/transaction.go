package models

import (
	"time"
)

type Transaction struct {
	ID      int    `json:"id" gorm:"primary_key"`
	Status  string `json:"status" gorm:"default:'Waiting Approve'"`
	Total   int    `json:"total"`
	BuyerID int    `json:"buyerID" gorm:"column: buyer_id"`
	// Buyer     User      `json:"buyer"`
	// Carts     []Cart    `json:"cart"`
	CreatedAt time.Time `json:"-"`
	UpdatedAt time.Time `json:"updatedAt" gorm:"column:update_at"`
}
