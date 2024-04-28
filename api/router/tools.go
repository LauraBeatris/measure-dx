package router

import (
	"encoding/json"
	"net/http"

	"github.com/LauraBeatris/dx-measure/models"
)

type ToolsHandler struct {
}

func (b ToolsHandler) ListTools(w http.ResponseWriter, r *http.Request) {
	err := json.NewEncoder(w).Encode(models.ListTools())

	if err != nil {
		http.Error(w, "Unexpected error", http.StatusInternalServerError)
		return
	}
}
