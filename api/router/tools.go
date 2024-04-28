package router

import (
	"encoding/json"
	"net/http"

	"github.com/LauraBeatris/dx-measure/models"
	"github.com/go-chi/chi/v5"
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

func (b ToolsHandler) GetTool(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")

	tool, err := models.GetTool(id)
	if err != nil {
		http.Error(w, "Tool not found", http.StatusNotFound)
		return
	}

	err = json.NewEncoder(w).Encode(tool)
	if err != nil {
		http.Error(w, "Unexpected error", http.StatusInternalServerError)
		return
	}
}
