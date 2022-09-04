package models

import "time"

type Profile struct {
	ID       int    `json:"id" gorm:"primary_key:auto_increment"`
	Image    string `json:"image" gorm:"type: varchar(255)"`
	Phone    int    `json:"phone" gorm:"type: int"`
	Address  string `json:"address" gorm:"type: text"`
	PostCode string `json:"postCode" gorm:"column:post_code type:varchar(255)"`
	UserID   int    `json:"userID" gorm:"column: user_id"`
	// User      UserProfileRel `json:"user"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
