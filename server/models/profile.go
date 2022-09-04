package models

import "time"

type Profile struct {
	ID        int                  `json:"id" gorm:"primary_key:auto_increment"`
	Img       string               `json:"img" gorm:"type: varchar(255)"`
	Phone     string               `json:"phone" gorm:"type: varchar(255)"`
	Address   string               `json:"address" gorm:"type: text"`
	PostCode  string               `json:"postCode" gorm:"type:varchar(255); column:post_code"`
	UserID    int                  `json:"userID" gorm:"column:user_id"`
	User      UserResponseRelation `json:"user"`
	CreatedAt time.Time            `json:"created_at"`
	UpdatedAt time.Time            `json:"updated_at"`
}

type ProfileResponseRelation struct {
	Phone    string `json:"phone"`
	Img      string `json:"img"`
	Address  string `json:"address"`
	PostCode string `json:"postCode" gorm:"column:post_code"`
	UserID   int    `json:"-"`
}

func (ProfileResponseRelation) TableName() string {
	return "profiles"
}
