package usersdto

type CreateUserRequest struct {
	FullName string `json:"fullName" validate:"required"`
	Email    string `json:"email" validate:"required"`
	Password string `json:"password" validate:"required"`
	Status   string `json:"status" form:"status"`
}

type UpdateUserRequest struct {
	FullName string `json:"fullName"`
	Email    string `json:"email"`
	Password string `json:"password"`
}
