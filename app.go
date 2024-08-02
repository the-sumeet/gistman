package main

import (
	"context"
	"fmt"

	"github.com/google/go-github/v63/github"
)

type ReturnValue struct {
	Data  any    `json:"data"`
	Error string `json:"error"`
}

// App struct
type App struct {
	ctx    context.Context
	github *github.Client
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

type Person struct {
	Name    string   `json:"name"`
	Age     uint8    `json:"age"`
	Address *Address `json:"address"`
}

type Address struct {
	Street   string `json:"street"`
	Postcode string `json:"postcode"`
}

func (a *App) Greet(p Person) string {
	return fmt.Sprintf("Hello %s (Age: %d)!", p.Name, p.Age)
}

func (a *App) LoggedIn() bool {
	return a.github != nil
}

func (a *App) LogIn(token string) ReturnValue {
	client := github.NewClient(nil).WithAuthToken(token)
	user, resp, err := client.Users.Get(context.Background(), "")
	if err != nil {
		if resp.StatusCode == 401 {
			return ReturnValue{Data: nil, Error: "Invalid token"}
		}
		return ReturnValue{Data: nil, Error: "Error logging in"}
	}

	a.github = client
	return ReturnValue{Data: *user.Login, Error: ""}
}

func (a *App) GetGists() ReturnValue {
	if !a.LoggedIn() {
		return ReturnValue{Data: nil, Error: "Not logged in"}
	}
	gists, resp, err := a.github.Gists.List(context.Background(), "", nil)
	if err != nil {
		if resp.StatusCode == 401 {
			return ReturnValue{Data: nil, Error: "Invalid token"}
		}
	}
	return ReturnValue{Data: gists, Error: ""}
}

func (a *App) GetGistFile(gistId string) ReturnValue {
	if !a.LoggedIn() {
		return ReturnValue{Data: nil, Error: "Not logged in"}
	}
	gist, resp, err := a.github.Gists.Get(context.Background(), gistId)
	if err != nil {
		if resp.StatusCode == 401 {
			return ReturnValue{Data: nil, Error: "Invalid token"}
		}
	}
	return ReturnValue{Data: gist, Error: ""}
}

func (a *App) GetUser() ReturnValue {
	if !a.LoggedIn() {
		return ReturnValue{Data: nil, Error: "Not logged in"}
	}
	user, resp, err := a.github.Users.Get(context.Background(), "")
	if err != nil {
		if resp.StatusCode == 401 {
			return ReturnValue{Data: nil, Error: "Invalid token"}
		}
	}
	return ReturnValue{Data: user, Error: ""}
}
