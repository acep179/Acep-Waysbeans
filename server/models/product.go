package models

import "time"

type Product struct {
	ID        int                  `json:"id" gorm:"primary_key:auto_increment"`
	Title     string               `json:"title" gorm:"type: varchar(255)"`
	Price     int                  `json:"price" gorm:"type: int"`
	Qty       int                  `json:"qty" gorm:"type:int"`
	Img       string               `json:"img" gorm:"type: varchar(255)"`
	Desc      string               `json:"desc" gorm:"type: text"`
	UserID    int                  `json:"userID" gorm:"column: user_id"`
	User      UserResponseRelation `json:"user"`
	CreatedAt time.Time            `json:"-"`
	UpdatedAt time.Time            `json:"-"`
}

type ProductResponseRelation struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	Price int    `json:"price"`
	Qty   int    `json:"qty"`
	Img   string `json:"img"`
	Desc  string `json:"desc"`
}

func (ProductResponseRelation) TableName() string {
	return "products"
}
