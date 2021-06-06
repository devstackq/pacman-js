package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

type Score struct {
	Name  string `json:"name"`
	Rank  int    `json:"rank"`
	Score int    `json:"score"`
	Time  string `json:"time"`
}

func Index(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("../client//index.html")
	tmpl.Execute(w, nil)
	if err != nil {
		log.Println(err)
	}
}
func main() {

	//handle index.html, execTemplate
	//sort, send data

	mux := http.NewServeMux()
	//file server
	mux.Handle("/statics/", http.StripPrefix("/statics/", http.FileServer(http.Dir("../client/statics/"))))
	log.Println("Listening port:", 6969)
	mux.HandleFunc("/", Index)
	mux.HandleFunc("rank", Sort)
	log.Println(http.ListenAndServe(":6969", mux))
}

//sort by score
func Sort(w http.ResponseWriter, r *http.Request) {
	//getDataJson -> sort by score filed
	//saveJson
	// err := 	json.Unmarshal(r.Body, struct)?
	fmt.Println("sort", r.Body)
}

func getDataJson() {

}
func saveDataJson() {

}
