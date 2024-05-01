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

// TODO - Configure Sentry
// TODO - Configure authentication/cors
// TODO - Configure data storage
func main() {
	cenv.Init()

	missingEnvVars := cenv.MissingEnvironmentVariables()
	if len(missingEnvVars) > 0 {
		panic(fmt.Sprintf("Missing environment variables: %+v", missingEnvVars))
	}

	r := chi.NewRouter()

	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(router.CorsHandler())

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("OK"))
	})
	r.Mount("/leaderboard", LeaderboardRoutes())
	r.Mount("/tools", ToolsRoutes())
	r.Mount("/rates", RatesRoutes())

	port := cenv.Get(cenv.Port)
	http.ListenAndServe(":"+port, r)
}

func LeaderboardRoutes() chi.Router {
	r := chi.NewRouter()
	LeaderboardHandler := router.LeaderboardHandler{}
	r.Get("/", LeaderboardHandler.GetLeaderboard)
	return r
}

func ToolsRoutes() chi.Router {
	r := chi.NewRouter()
	ToolsHandler := router.ToolsHandler{}
	r.Get("/", ToolsHandler.ListTools)
	r.Get("/{id}", ToolsHandler.GetTool)
	return r
}

func RatesRoutes() chi.Router {
	r := chi.NewRouter()
	ToolsHandler := router.ToolsHandler{}
	r.Get("/", ToolsHandler.ListRateAreas)
	return r
}
