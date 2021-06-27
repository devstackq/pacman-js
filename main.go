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
	"strconv"
)

type Score struct {
	Name        string `json:"name"`
	Rank        int    `json:"rank"`
	Score       int    `json:"score"`
	Time        string `json:"time"`
	RankPercent string `json:"rankPercent"`
}

func Index(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("./index.html"))
	tmpl.Execute(w, nil)
	//open json file, then only change data
}
func main() {
	mux := http.NewServeMux()
	//file server
	mux.Handle("/statics/", http.StripPrefix("/statics/", http.FileServer(http.Dir("./statics/"))))
	log.Println("Run server..")
	mux.HandleFunc("/", Index)
	mux.HandleFunc("/score", CalculateRank)
	log.Println(http.ListenAndServe(":8888", mux))
}

var rank int

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
		r.Header.Add("Accept-Charset", "UTF-8")
		w.WriteHeader(200)

		if origin := r.Header.Get("Origin"); origin != "" {
			w.Header().Set("Access-Control-Allow-Origin", origin)
		}
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token")
		w.Header().Set("Access-Control-Allow-Credentials", "true")
		w.Header().Set("Content-Type", "application/json")
		// w.Header().Set("Content-Type", "text/html")
		w.Write(byteValue)
	case "POST":
		last := Score{}
		b, err := ioutil.ReadAll(r.Body)
		if err != nil {
			log.Println(err)
		}
		//get data -> from request
		err = json.Unmarshal(b, &last)
		if err != nil {
			log.Println(err)
		}
		fmt.Println(last, "request data")
		//get data from json
		ranks := []Score{}
		err = json.Unmarshal(byteValue, &ranks)
		if err != nil {
			log.Println(err)
		}

		ranks = append(ranks, last)
		//sort
		sort.SliceStable(ranks, func(i, j int) bool {
			return ranks[i].Score > ranks[j].Score || (ranks[i].Score == ranks[j].Score && ranks[i].Time < ranks[j].Time)
		})
		// fmt.Println(len(ranks))
		for i, v := range ranks {
			if last.Name == v.Name && last.Score == v.Score {
				temp := len(ranks)
				percent := float32(i+1) / (float32(temp) / float32(100))
				r := strconv.Itoa(int(percent))

				ranks[i].RankPercent = r + " " + last.Name
			}
			ranks[i].Rank = i + 1
		}
		fmt.Println(ranks)
		//save new data in json
		jsonString, _ := json.Marshal(ranks)
		ioutil.WriteFile("scoreboard.json", jsonString, os.ModePerm)
	}
}
