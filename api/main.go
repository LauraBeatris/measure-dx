package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/LauraBeatris/dx-measure/cenv"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	_ "github.com/joho/godotenv/autoload"
)

func main() {
	cenv.Init()

	missingEnvVars := cenv.MissingEnvironmentVariables()
	if len(missingEnvVars) > 0 {
		panic(fmt.Sprintf("Missing environment variables: %+v", missingEnvVars))
	}

	r := chi.NewRouter()

	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	r.Get("/leaderboard", func(w http.ResponseWriter, r *http.Request) {
		data := []string{"Alice", "Bob", "Charlie"}

		jsonData, err := json.Marshal(data)

		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.Write(jsonData)
	})

	port := cenv.Get(cenv.Port)
	http.ListenAndServe(":"+port, r)
}
