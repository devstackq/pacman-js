import { mapGame } from "./map.js";
let p = document.getElementById('pacman')
let obj = {
    indexDom: 674,
    posDiv: 0,
    rafId: 0,
    keys: {
        ArrowLeft: false,
        ArrowRight: false,
        ArrowUp: false,
        ArrowDown: false
    },
    progress: 7,
    posX: 420,
    posY: 630,
    x: "",
    y: "",
    h: 31, // height each block
    size: 28,
    cool: 0,
    inPlay: false,
}
document.addEventListener("DOMContentLoaded", () => {
    obj.pacman = p
    obj.grid = document.getElementById('grid')
    createBoard()
})

document.addEventListener('keyup', (e) => {
    for (let [k, v] of Object.entries(obj.keys)) {
        obj.keys[k] = false
    }
})

document.addEventListener('keydown', (e) => {
    for (let [k, v] of Object.entries(obj.keys)) {
        if (k = e.key) {
            obj.keys[k] = true
        }
    }
    if (!obj.inPlay) {
        obj.inPlay = true
        obj.pacman.style.display = 'block'
        obj.rafId = requestAnimationFrame(step)
    }
})

// define parent,
// if pacman pos x, y ==
//     plavno - peremeshat RAF
correct - > show index - y - , & y
correct set position in pacaman in Map

todo logic - pacman ConvolverNode, x 420 / 30 + y 660 = 674 index Dom,
    if obj.grid.children[indexDom].type == 1, no tanfosrTransalte,
    if type == 0, replace value this dom elems,
    class freepath, add score, type = 9



function step() {

    let w = 24 / 2
    let h = 24 / 2
    let size = 0

    //dom index, by X ?
    //obj.grid.children[obj.posX / 30 * obj.posY / 30]
    if (obj.inPlay) {

        obj.cool--
            if (obj.cool < 0) {
                if (obj.posX - w >= 0) {
                    obj.indexDom = obj.posY + (obj.posX / 30) - 1
                    console.log(Math.floor(obj.indexDom), 'index dom', obj.posX, obj.posY, 'pos pacman x,y', obj.grid.children[Math.floor(obj.indexDom)], 'dom elem by index')
                        //if call 6, -1,+1 -28 +28
                    if (obj.keys.ArrowLeft) { //500 - 50
                        size = 30
                            //in Dom elements, 868
                            // if (obj.grid.children[obj.posX] && obj.grid.children[obj.posY]) {
                            // }
                            // p.style.position = 'absolute'
                        p.style.transform = `translate(${obj.posX-= size}px, ${obj.posY}px  )`;
                    }
                }

                if (obj.posX + w <= 840) {
                    obj.indexDom = obj.posY + (obj.posX / 30) + 1
                    if (obj.keys.ArrowRight) {
                        size = 30
                        p.style.transform = `translate(${obj.posX+=size}px, ${ obj.posY}px )`;
                    }
                }
                // console.log(obj.posX, obj.posY, 'bef', obj.pacman)
                if (obj.posY - h >= 0) {
                    obj.indexDom = obj.posY + (obj.posX / 30) - 28
                    if (obj.keys.ArrowUp) {
                        size = 30
                        p.style.transform = `translate(${obj.posX}px, ${ obj.posY-=size}px )`;
                    }
                }

                if (obj.posY + w <= 930) {
                    obj.indexDom = obj.posY + (obj.posX / 30) + 28
                    if (obj.keys.ArrowDown) {
                        size = 30
                        p.style.transform = `translate(${obj.posX}px, ${ obj.posY+=size }px )`;
                    }
                }
                obj.cool = 60
            }
            // console.log(obj.cool)

        obj.rafId = requestAnimationFrame(step);
    }
}

const createBoard = () => {
    //create each block -> get data from mapGame array
    mapGame.forEach((el, idx) => {
        createSquare(el, idx);
    });
    //add ghost in board
    // for (let i = 0; i < 4; i++) {
    //     createGhost(i);
    // }
    // get static elems -> add in Obejct, then add array - tags, change values -> render new value
    for (let i = 0; i < obj.size; i++) {
        obj.x += 30 + "px "; //cell grid height, width count - for grid
    }
    // 31 count height field Map
    for (let i = 0; i < obj.h; i++) {
        obj.y += 30 + "px "; //cell grid rows count, 31px
    }
    //set grid rows, columns, size - count
    obj.grid.style.gridTemplateColumns = obj.x;
    obj.grid.style.gridTemplateRows = obj.y;
    //board localy dom, props.grid -> in DOm browser inserted
    console.log("created board", 2);
};

let y = 0
let x = 0
const createSquare = (type, index) => {
    let div = document.createElement("div");

    div.classList.add("box");
    x++
    if (x % 28 == 0) {
        y++
        x = 0
    }
    //set attr, x,y pos -for transform tarnsalte
    div.posX = x * 30 //
    div.posY = y * 30 //

    // console.log(x * 30, y * 30 * x)
    //create new div -> add class, append object - props.grid
    if (type === 0) {
        const coin = document.createElement("div");
        coin.classList.add("coin");
        div.append(coin);
    } else if (type === 1) {
        let wall = document.createElement("div");
        wall.classList.add("wall");
        div.append(wall);
    } else if (type === 3) {
        let empty = document.createElement("div");
        empty.classList.add("empty");
        div.append(empty);
    } else if (type === 4) {
        let cookie = document.createElement("div");
        cookie.classList.add("cookie");
        div.append(cookie);
    } else if (type === 6) {
        let door = document.createElement("div");
        door.classList.add("doorEnemy");
        div.append(door);
    } else if (type === 8) {
        let teleport = document.createElement("div");
        teleport.classList.add("teleport");
        div.append(teleport);
    } else if (type === 9) {
        let freePath = document.createElement("div");
        freePath.classList.add("freePath");
        div.append(freePath);
    }
    div.type = type;
    // div.idVal = board.length;
    obj.grid.append(div);
};