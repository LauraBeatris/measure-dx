package models

type RateArea struct {
	ID    string `json:"id"`
	Title string `json:"title"`
}

var rateAreas = []*RateArea{
	{
		ID:    "1",
		Title: "Tool is simple, easy to install, setup and use",
	},
	{
		ID:    "2",
		Title: "Clear documentation",
	},
}

func ListRateAreas() []*RateArea {
	return rateAreas
}
