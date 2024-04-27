package cenv

import (
	"os"
	"strings"
)

const (
	Port = "PORT"
)

var requiredEnvVars = []string{}

func Init() {
	setOptionalEnvVar(Port, "3000")
}

func setOptionalEnvVar(name, value string) {
	if _, exists := os.LookupEnv(name); !exists {
		os.Setenv(name, value)
	}
}

func Get(key string) string {
	return strings.TrimSpace(os.Getenv(key))
}

func MissingEnvironmentVariables() []string {
	missingArr := []string{}
	for _, envVar := range requiredEnvVars {
		if _, exists := os.LookupEnv(envVar); !exists {
			missingArr = append(missingArr, envVar)
		}
	}

	return missingArr
}
