package routes

import (
	"waysbeans/handlers"
	"waysbeans/pkg/mysql"
	"waysbeans/repositories"

	"github.com/gorilla/mux"
)

// Create ProfileRoutes function and add the route here ...
func ProfileRoutes(r *mux.Router) {
	profileRepository := repositories.RepositoryProfile(mysql.DB)
	h := handlers.HandlerProfile(profileRepository)

	r.HandleFunc("/profiles", h.FindProfiles).Methods("GET")
	r.HandleFunc("/profile/{id}", h.GetProfile).Methods("GET")
	// r.HandleFunc("/profile", middleware.Auth(middleware.UploadFile(h.CreateProfile))).Methods("POST")
}
