package router

import (
	"net/http"
)

type LeaderboardHandler struct {
}

func (b LeaderboardHandler) GetLeaderboard(w http.ResponseWriter, r *http.Request) {}
