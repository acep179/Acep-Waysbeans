package models

import "time"

type User struct {
	ID        int                     `json:"id" gorm:"primary_key:auto_increment"`
	FullName  string                  `json:"fullName" gorm:"column:full_name; type: varchar(255)"`
	Email     string                  `json:"email" gorm:"type: varchar(255)"`
	Password  string                  `json:"password" gorm:"type: varchar(255)"`
	Status    string                  `json:"status"`
	Profile   ProfileResponseRelation `json:"profile"`
	CreatedAt time.Time               `json:"-"`
	UpdatedAt time.Time               `json:"-"`
}

type UserResponseRelation struct {
	ID       int    `json:"id"`
	FullName string `json:"fullName" gorm:"column:full_name"`
	Email    string `json:"email"`
	Status   string `json:"status"`
}

func (UserResponseRelation) TableName() string {
	return "users"
}
