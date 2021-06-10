export default class {
    constructor(params) {
        this.params = params;
    }
    setTitle(title) {
        document.title = title;
    }
    init() {
        let scoreBoard = []

        console.log('sort and show score')
        fetch(`http://localhost:6969/score`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                generateDynamicTable(data, 5)
                console.log(data, 'res')
                scoreBoard = data
            });

            //create dynamic html table -> then append data

//def value obj
let typeSort = {
    size:5 ,
    numPage: 1,
  };
  //pagination next, prev func
  const getNextPage = (arr, typeSort) => {
    console.log(typeSort, "pagination func");
  
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

    // CREATE TABLE HEAD .
    let tHead = document.createElement("thead");
    tHead.style.background = "SteelBlue";
    // CREATE ROW FOR TABLE HEAD .
    let hRow = document.createElement("tr");
    // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
    for (let i = 0; i < tHeaderValue.length; i++) {
      let th = document.createElement("th");
      th.innerHTML = tHeaderValue[i];
      hRow.appendChild(th);
    }
    tHead.appendChild(hRow);
    table.appendChild(tHead);

    //create body table
    let tBody = document.createElement("tbody");

    // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
    // size  < capacity, capacity 10/20/50/100
    for (let i = 0; i < size; i++) {
      let bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
      for (let j = 0; j < tHeaderValue.length; j++) {
        let td = document.createElement("td");
        if ([tHeaderValue[j]] == "rank") {
          td.textContent = i+1;
        }
        if (tHeaderValue[j] == "name") {
          td.textContent = data[i].name;
        }
        if (tHeaderValue[j] == "score") {
          td.textContent = data[i]["score"]
        }
        if (tHeaderValue[j] == "time") {
            td.textContent = data[i]["time"]
          }
        bRow.appendChild(td);
      }
      tBody.appendChild(bRow);
    }
    table.appendChild(tBody);
    let s = document.getElementById('score')
    s.appendChild(table)
    
    // document.body.appendChild(table);
  }
};
            //escape case -> main menu || restart redirec -> /play
            // todo pagination
            //check bugs

            
let btnPrev = document.createElement("button");
btnPrev.className = "btn_prev";
btnPrev.id = "prev";
btnPrev.textContent = 1;

let btnNext = document.createElement("button");
btnNext.className = "btn_next";
btnNext.id = "next";
btnNext.textContent = Math.floor(typeSort.countPage);
}

    async getHtml() {
        let wrapper = `
        <div id='score'>

        </div>
        `
        return wrapper;
    }
}