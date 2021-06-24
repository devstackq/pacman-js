export default class {
    constructor(params) {
        this.params = params;
    }
    setTitle(title) {
        document.title = title;
    }
    init() {
            let scoreBoard = []

            fetch(`http://localhost:6969/score`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    // console.log(data, 'res')
                    scoreBoard = data
                    showStats()
                    generateDynamicTable(data, 5)
                });

            document.addEventListener("keydown", (e) => {
                if (e.code == 'Escape') {
                    console.log('escape')
                    let menu = document.querySelector('.gameMenu')
                    menu.style.display = 'block'

                    menu.children[0].onclick = (e) => {
                        menu.style.display = 'none'
                        window.location.href = `http://localhost:6969/`
                    }
                }
            })

            const showStats = () => {
                let name = window.localStorage.getItem('name')
                let f = scoreBoard.filter((i) => i.rankPercent.split(" ")[1] === name)[0]
                if (f!= undefined) {
                f.rankPercent = f.rankPercent.split(" ")[0]
                let msg = `Congrats ${f.name}, you are in the top ${f.rankPercent}%, in the ${f.rank} position.`
                let span = document.createElement('span')
                span.className = 'textPercent'
                span.textContent = msg
                document.getElementById('score').appendChild(span)
            }

            }

            let typeSort = {
                size: 5,
                numPage: 1,
                countPage: 0
            };

            //pagination next, prev func
            const getNextPage = (arr, typeSort) => {

                let boundHeroes = [];
                let t = arr.length / typeSort.size;
                let last = 0;

                if (typeSort.numPage == Math.floor(t) + 1) {
                    let diff = typeSort.numPage * typeSort.size - arr.length;
                    last = typeSort.size;
                    typeSort.size = typeSort.size - diff;
                }

                let start = 0;
                let end = 0;
                //for last values in pagination
                if (typeSort.numPage == Math.floor(t) + 1) {
                    start = typeSort.numPage * last - last;
                    end = last * (typeSort.numPage - 1) + last;
                } else {
                    start = typeSort.numPage * typeSort.size - typeSort.size;
                    end = typeSort.size * typeSort.numPage - 1;
                }
                arr.forEach((el, idx) => {
                    if (idx >= start && idx <= end) {
                        boundHeroes.push(el);
                    }
                });
                typeSort.size = 5
                generateDynamicTable(boundHeroes, typeSort.size);
            };

            const generateDynamicTable = (data, size) => {
                // create table
                let table = document.createElement("table");
                table.id = "tableId";
                //removeTable('firstTableId')
                let tableID = document.getElementById("tableId");
                if (tableID != null) {
                    tableID.remove();
                    console.log("remove prev table");
                }

                if (data.length > 0) {
                    table.style.width = "100%";
                    table.setAttribute("border", "1");
                    table.setAttribute("cellspacing", "1");
                    table.setAttribute("cellpadding", "2");

                    let tHeaderValue = [
                        "rank",
                        "name",
                        "score",
                        "time"
                    ];

                    //craete table head .
                    let tHead = document.createElement("thead");
                    tHead.style.background = "SteelBlue";
                    let hRow = document.createElement("tr");
                    // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
                    for (let i = 0; i < tHeaderValue.length; i++) {
                        let th = document.createElement("th");
                        th.innerHTML = tHeaderValue[i];
                        th.style.background = 'lightgray'
                        hRow.appendChild(th);
                    }
                    tHead.appendChild(hRow);
                    table.appendChild(tHead);
                    //create body table
                    let tBody = document.createElement("tbody");
                    // size  < capacity, capacity 10/20/50/100
                    for (let i = 0; i < size; i++) {
                        let bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
                        for (let j = 0; j < tHeaderValue.length; j++) {
                            let td = document.createElement("td");
                            td.style.background = 'pink'
                            td.style.color = 'blue'
                            if (data[i] != undefined) {
                                if ([tHeaderValue[j]] == "rank") {
                                    td.textContent = data[i]["rank"]
                                }
                                if (tHeaderValue[j] == "name") {
                                    td.textContent = data[i]["name"];
                                }
                                if (tHeaderValue[j] == "score") {
                                    td.textContent = data[i]["score"]
                                }
                                if (tHeaderValue[j] == "time") {
                                    td.textContent = data[i]["time"]
                                }
                            }
                            bRow.appendChild(td);
                        }
                        tBody.appendChild(bRow);
                    }
                    table.appendChild(tBody);
                    document.getElementById('score').appendChild(table)
                }
            };

            let btnPrev = document.createElement("button");
            btnPrev.className = "btn_prev";
            btnPrev.id = "prev";
            btnPrev.textContent = 'пред.'

            let btnNext = document.createElement("button");
            btnNext.className = "btn_next";
            btnNext.id = "next";
            btnNext.textContent = "след."

            let numpage = document.createElement("span");
            numpage.className = "numpage";
            numpage.textContent = 1

            btnNext.onclick = () => {
                if (typeSort.numPage <= Math.floor(scoreBoard.length / 5)) {
                    typeSort.numPage++
                        getNextPage(scoreBoard, typeSort)
                    numpage.textContent = typeSort.numPage
                }
            }
            btnPrev.onclick = () => {
                if (typeSort.numPage > 1) {
                    typeSort.numPage--
                        getNextPage(scoreBoard, typeSort)
                    numpage.textContent = typeSort.numPage
                }
            }
            document.getElementById('score').appendChild(btnPrev);
            document.getElementById('score').appendChild(numpage);
            document.getElementById('score').appendChild(btnNext);
        }
        //add rank

    async getHtml() {
        let wrapper = `
        <div id='score'></div>
        <div class="gameMenu scoreMenu">
            <a>Меню</a>
        </div>
        `
        return wrapper;
    }
}