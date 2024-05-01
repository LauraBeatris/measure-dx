package router

import (
	"encoding/json"
	"net/http"

	"github.com/LauraBeatris/dx-measure/models"
)

type RatesHandler struct {
}

func (b ToolsHandler) ListRateAreas(w http.ResponseWriter, r *http.Request) {
	err := json.NewEncoder(w).Encode(models.ListRateAreas())

	if err != nil {
		http.Error(w, "Unexpected error", http.StatusInternalServerError)
		return
	}
}
