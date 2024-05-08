package main

import (
	"context"
	"fmt"
	"log"

	"github.com/google/go-github/v61/github"
)

// App struct
type App struct {
	ctx   context.Context
	Gists []*github.Gist
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// Fetch gists from github client
func (a *App) GetGists() []*github.Gist {
	client := github.NewClient(nil).WithAuthToken("TOKEN")
	gists, _, err := client.Gists.List(context.Background(), "", nil)
	if err != nil {
		log.Fatal(err)
	}
	a.Gists = gists

	res := []string{}
	for i := range a.Gists {
		res = append(res, *a.Gists[i].ID)
	}

	return a.Gists
}
