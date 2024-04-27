package router

import (
	"encoding/json"
	"net/http"

	"github.com/LauraBeatris/dx-measure/models"
)

type LeaderboardHandler struct {
}

func (b LeaderboardHandler) GetLeaderboard(w http.ResponseWriter, r *http.Request) {
	err := json.NewEncoder(w).Encode(models.GetLeaderboard())
	if err != nil {
		http.Error(w, "Internal error", http.StatusInternalServerError)
		return
	}
}
