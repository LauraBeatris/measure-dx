package models

import "fmt"

type Tool struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	LogoUrl     string `json:"logoUrl"`
	WebsiteUrl  string `json:"websiteUrl"`
	AverageRate string `json:"averageRate"`
}

var tools = []*Tool{
	{
		ID:          "1",
		Name:        "Resend",
		LogoUrl:     "https://avatars.githubusercontent.com/u/109384852?v=4",
		WebsiteUrl:  "https://resend.com/",
		AverageRate: "6.0",
	},
	{
		ID:          "2",
		Name:        "Vercel",
		WebsiteUrl:  "https://vercel.com/",
		AverageRate: "5.0",
		LogoUrl:     "https://avatars.githubusercontent.com/u/14985020?s=200&v=4",
	},
	{
		ID:          "3",
		Name:        "Railway",
		WebsiteUrl:  "https://www.railway.app/",
		AverageRate: "5.0",
		LogoUrl:     "https://avatars.githubusercontent.com/u/66716858?s=200&v=4",
	},
	{
		ID:          "4",
		Name:        "Basehub",
		WebsiteUrl:  "https://basehub.com",
		AverageRate: "5.0",
		LogoUrl:     "https://avatars.githubusercontent.com/u/126886981?s=200&v=4",
	},
}

// TODO - Fetch from storage, order alphabetically
func ListTools() []*Tool {
	return tools
}

// TODO - Fetch from storage
func GetTool(id string) (*Tool, error) {
	for _, tool := range tools {
		if tool.ID == id {
			return tool, nil
		}
	}
	return nil, fmt.Errorf("Tool not found")
}
