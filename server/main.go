package main

import (
	"fmt"
	"net/http"
	"waysbeans/database"
	"waysbeans/pkg/mysql"
	"waysbeans/routes"

	"github.com/gorilla/mux"
)

func main() {
	// errEnv := godotenv.Load()
	// if errEnv != nil {
	// 	panic("Failed to load env file")
	// }

	// //. initial DB
	mysql.DatabaseInit()

	// //. run migration
	database.RunMigration()

	r := mux.NewRouter()

	routes.RouteInit(r.PathPrefix("/api/v1").Subrouter())

	r.PathPrefix("/uploads").Handler(http.StripPrefix("/uploads/", http.FileServer(http.Dir("./uploads"))))

	var port = "5000"
	// os.Getenv("PORT")

	//. Setup allowed Header, Method, and Origin for CORS
	// var AllowedHeaders = handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	// var AllowedMethods = handlers.AllowedMethods([]string{"GET", "POST", "HEAD", "OPTIONS", "PATCH", "DELETE"})
	// var AllowedOrigins = handlers.AllowedOrigins([]string{"*"})

	fmt.Println("server running localhost:" + port)

	//. Embed the setup allowed in 2 parameter
	http.ListenAndServe("localhost:"+port, r)
	// handlers.CORS(AllowedHeaders, AllowedMethods, AllowedOrigins)(r)
}
