package usersdto

type UserResponse struct {
	ID       int    `json:"id"`
	FullName string `json:"fullName" validate:"required"`
	Email    string `json:"email" validate:"required"`
	Status   string `json:"status" validate:"required"`
}
