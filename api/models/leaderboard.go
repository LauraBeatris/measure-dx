package models

var leaderboard = []*Tool{
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

// TODO - Implement leaderboard ordering logic by rate
func GetLeaderboard() []*Tool {
	return leaderboard
}
