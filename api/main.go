package main

import (
	"fmt"
	"net/http"

	"github.com/LauraBeatris/dx-measure/cenv"
	"github.com/LauraBeatris/dx-measure/router"
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

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("OK"))
	})
	r.Mount("/leaderboard", LeaderboardRoutes())

	port := cenv.Get(cenv.Port)
	http.ListenAndServe(":"+port, r)
}

func LeaderboardRoutes() chi.Router {
	r := chi.NewRouter()
	LeaderboardHandler := router.LeaderboardHandler{}
	r.Get("/", LeaderboardHandler.GetLeaderboard)
	return r
}
