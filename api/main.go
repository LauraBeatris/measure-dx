package main

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	r := chi.NewRouter()

	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	// TODO - Report panics to Sentry and re-panic

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

	http.ListenAndServe(":3000", r)
}
