package models

type Tool struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	WebsiteUrl  string `json:"websiteUrl"`
	AverageRate string `json:"averageRate"`
}

var leaderboard = []*Tool{
	{
		ID:          "1",
		Name:        "Resend",
		WebsiteUrl:  "https://resend.com/",
		AverageRate: "6.0",
	},
	{
		ID:          "2",
		Name:        "Vercel",
		WebsiteUrl:  "https://vercel.com/",
		AverageRate: "5.0",
	},
	{
		ID:          "3",
		Name:        "Vercel",
		WebsiteUrl:  "https://vercel.com/",
		AverageRate: "5.0",
	},
	{
		ID:          "4",
		Name:        "Vercel",
		WebsiteUrl:  "https://vercel.com/",
		AverageRate: "5.0",
	},
}

func GetLeaderboard() []*Tool {
	return leaderboard
}
