package repositories

import (
	"waysbeans/models"

	"gorm.io/gorm"
)

type AuthRepository interface {
	Register(models.User) (models.User, error)
	Login(email string) (models.User, error)
	Getuser(ID int) (models.User, error)
	CreateNilProfile(profile models.Profile) (models.Profile, error)
}

func RepositoryAuth(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) Register(user models.User) (models.User, error) {
	err := r.db.Create(&user).Error

	return user, err
}

func (r *repository) Login(email string) (models.User, error) {
	var user models.User
	err := r.db.Preload("Profile").First(&user, "email=?", email).Error

	return user, err
}

func (r *repository) Getuser(ID int) (models.User, error) {
	var user models.User
	err := r.db.First(&user, ID).Error

	return user, err
}

func (r *repository) CreateNilProfile(profile models.Profile) (models.Profile, error) {
	err := r.db.Create(&profile).Error

	return profile, err
}
