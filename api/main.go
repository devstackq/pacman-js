package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"sort"
)

type Score struct {
	Name  string `json:"name"`
	Rank  int    `json:"rank"`
	Score int    `json:"score"`
	Time  string `json:"time"`
}

func Index(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("../client/index.html"))
	tmpl.Execute(w, nil)
	//open json file, then only change data
}
func main() {
	mux := http.NewServeMux()
	//file server

	mux.Handle("/statics/", http.StripPrefix("/statics/", http.FileServer(http.Dir("../client/statics/"))))
	log.Println("Listening port:", 6969)
	mux.HandleFunc("/", Index)
	mux.HandleFunc("/score", CalculateRank)
	log.Println(http.ListenAndServe(":6969", mux))
}

func CalculateRank(w http.ResponseWriter, r *http.Request) {

	//get data -> from json
	jsonFile, err := os.Open("scoreboard.json")
	if err != nil {
		fmt.Println(err)
	}
	byteValue, err := ioutil.ReadAll(jsonFile)
	if err != nil {
		log.Println(err)
	}
	defer jsonFile.Close()

	switch r.Method {

	case "GET":
		fmt.Println("get query in backend")
		w.WriteHeader(200)
		w.Header().Set("Content-Type", "application/json")
		w.Write(byteValue)
	case "POST":
		score := Score{}
		b, err := ioutil.ReadAll(r.Body)
		if err != nil {
			log.Println(err)
		}
		//get data -> from request
		err = json.Unmarshal(b, &score)
		if err != nil {
			log.Println(err)
		}
		fmt.Println(score, "request data")
		//get data from json
		ranks := []Score{}
		err = json.Unmarshal(byteValue, &ranks)
		if err != nil {
			log.Println(err)
		}

		ranks = append(ranks, score)

		//sort
		sort.SliceStable(ranks, func(i, j int) bool {
			return ranks[i].Score > ranks[j].Score
		})

		for i, v := range ranks {
			v.Rank = i
		}
		// fmt.Println(ranks, "after sort")

		//save new data in json
		jsonString, _ := json.Marshal(ranks)
		ioutil.WriteFile("scoreboard.json", jsonString, os.ModePerm)

	}
}

func getDataJson() {

}
func saveDataJson() {

}
