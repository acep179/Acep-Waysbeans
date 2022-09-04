package models

import "time"

type Product struct {
	ID     int    `json:"id" gorm:"primary_key:auto_increment"`
	Title  string `json:"title" gorm:"type: varchar(255)"`
	Price  int    `json:"price" gorm:"type: int"`
	Img    string `json:"img" gorm:"type: varchar(255)"`
	Desc   string `json:"desc" gorm:"type: text"`
	UserID int    `json:"-" gorm:"column: user_id"`
	// User      UserProfileRel `json:"user"`
	CreatedAt time.Time `json:"-"`
	UpdatedAt time.Time `json:"-"`
}
