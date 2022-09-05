package authdto

import "waysbeans/models"

type RegisterResponse struct {
	ID       int    `json:"id"`
	FullName string `json:"fullName" validate:"required"`
	Email    string `json:"email" validate:"required"`
	Password string `json:"password" validate:"required"`
	Status   string `json:"status"`
}

type LoginResponse struct {
	ID       int                            `gorm:"type: int" json:"id"`
	FullName string                         `gorm:"type: varchar(255)" json:"fullName"`
	Email    string                         `gorm:"type: varchar(255)" json:"email"`
	Status   string                         `gorm:"type: varchar(255)" json:"status"`
	Token    string                         `gorm:"type: varchar(255)" json:"token"`
	Profile  models.ProfileResponseRelation `json:"profile"`
}

type CheckAuthResponse struct {
	ID       int    `gorm:"type: int" json:"id"`
	FullName string `gorm:"type: varchar(255)" json:"fullName"`
	Email    string `gorm:"type: varchar(255)" json:"email"`
	Status   string `gorm:"type: varchar(50)"  json:"status"`
}
