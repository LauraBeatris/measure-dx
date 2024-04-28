package router

import (
	"net/http"

	"github.com/go-chi/cors"
)

func CorsHandler() func(http.Handler) http.Handler {
	c := cors.New(cors.Options{
		// TODO: Add production domain
		AllowedOrigins:   []string{"https://dx-measure.vercel.app"},
		AllowCredentials: false,
		AllowedMethods:   []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Authorization", "Accept", "Content-Type"},
		MaxAge:           300,
	})
	return c.Handler
}
