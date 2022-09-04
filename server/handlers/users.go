package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"
	dto "waysbeans/dto/result"
	usersdto "waysbeans/dto/users"
	"waysbeans/models"
	"waysbeans/repositories"

	"github.com/go-playground/validator/v10"
	"github.com/gorilla/mux"
)

type handlerUser struct {
	UserRepository repositories.UserRepository
}

func HandlerUser(UserRepository repositories.UserRepository) *handlerUser {
	return &handlerUser{UserRepository}
}

func (h *handlerUser) FindUsers(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")

	users, err := h.UserRepository.FindUsers()

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Status: http.StatusOK, Data: users}

	json.NewEncoder(w).Encode(response)
}

func (h *handlerUser) GetUser(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])

	user, err := h.UserRepository.GetUser(id)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Status: http.StatusOK, Data: user}

	json.NewEncoder(w).Encode(response)
}

func (h *handlerUser) CreateUser(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")

	request := new(usersdto.CreateUserRequest)
	if err := json.NewDecoder(r.Body).Decode(request); err != nil {
		w.WriteHeader(http.StatusBadRequest)

		response := dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	var userStatus string

	if request.Status == "" {
		userStatus = "customer"
	} else {
		userStatus = request.Status
	}

	user := models.User{
		FullName: request.FullName,
		Email:    request.Email,
		Password: request.Password,
		Status:   userStatus,
	}

	data, err := h.UserRepository.CreateUser(user)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Status: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Status: http.StatusOK, Data: convertUsersResponse(data)}
	json.NewEncoder(w).Encode(response)
}

func convertUsersResponse(u models.User) usersdto.UserResponse {
	return usersdto.UserResponse{
		ID:       u.ID,
		FullName: u.FullName,
		Email:    u.Email,
		Status:   u.Status,
	}
}
