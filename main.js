const mapGame = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 4, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 4, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 9, 1, 1, 9, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    3, 3, 3, 3, 3, 1, 0, 1, 1, 1, 1, 1, 9, 1, 1, 9, 1, 1, 1, 1, 1, 0, 1, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 1, 0, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 0, 1, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 1, 0, 1, 1, 9, 1, 1, 1, 6, 6, 1, 1, 1, 9, 1, 1, 0, 1, 3, 3, 3, 3, 3,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 9, 1, 1, 9, 9, 9, 9, 1, 1, 9, 1, 1, 0, 1, 1, 1, 1, 1, 8,
    9, 9, 9, 9, 9, 9, 0, 9, 9, 9, 1, 1, 2, 2, 2, 2, 1, 1, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9,
    8, 1, 1, 1, 1, 1, 0, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    3, 3, 3, 3, 3, 1, 0, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 0, 1, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 1, 0, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 0, 1, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 1, 0, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 0, 1, 3, 3, 3, 3, 3,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 4, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 4, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];
//keys state
const keys = {
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
    ArrowDown: false
};
//manage dom elems - coin opacity
const temp = [];

const props = {
    x: "", // for grid  row - render style
    y: "",
    h: 31, // height borad, count Y
    size: 28,
    inPlay: false
};
//test obj, for dumping props object
const obj = {};

const player = {
    posX: 425, //def posX - transform translate
    posY: 695,
    score: 0,
    life: 5,
    indexMap: 0,
    cool: 0,
    speed: 4,
    killGhost: false,
    time: {
        sec: 0,
        min: 0,
    },
    countCoin: 0,
    rafId: 0,
    pause: false,
};

const ghost = {
    pinkGhost: {
        name: "Pinkī",
        goOutBox: false,
        basePos: 405,
        direct: "up",
        turn: false,
        sequence: [],
        color: "pink",
        // turnLeft: 0,
    },
    orangeGhost: {
        name: "Guzuta",
        goOutBox: false,
        basePos: 404,
        direct: "right",
        turn: false,
        color: "orange",
    },
    redGhost: {
        name: "Akabei",
        goOutBox: false,
        basePos: 406,
        direct: "up",
        turn: false,
        color: "red",
    },
    cyanGhost: {
        name: "Aosuke",
        goOutBox: false,
        basePos: 407,
        direct: "left",
        turn: false,
        color: "cyan",
    },
    timeGoAway: 0,
    cool: 0,
    death: false, //if death, goHomePos()
    goAway: false, // if cookie, getAway()
};


//dom onladed -> get grid elem, -> append - block, then manipulate this dom object, etc
document.URL.includes("play.html") ?

    document.addEventListener("DOMContentLoaded", () => {
        props.grid = document.getElementById("grid");
        obj.pacman = document.getElementById("pacman");
        props.modal = document.getElementById("modal");
        props.notify = document.getElementById("notify");
        //set default pos in Dom
        obj.pacman.style.transform = `translate(425px, 695px)`;
        // obj.pacman.style.transition = '0.1s ease'
        obj.pacman.style.position = 'absolute'
        createBoard();
    }) : null

document.addEventListener("keyup", (e) => {
    if (e.code in keys) {
        keys[e.code] = false;
        player
    }
})

document.addEventListener("keydown", (e) => {
    if (e.code in keys) {
        keys[e.code] = true;
    }

    if (!props.inPlay) {
        props.notify.style.display = "none";
        props.inPlay = true;
        player.rafId = requestAnimationFrame(step);
    }

    //esc - show modal page
    if (e.code === "Escape") {
        props.modal.style.display = "flex";
        // continue
        props.modal.children[1].style.display = "block";
        player.pause = true;
        window.cancelAnimationFrame(player.rafId);

        //continue btn
        props.modal.children[1].onclick = (e) => {
            player.play = requestAnimationFrame(step);
            player.pause = false;
            props.inPlay = true;
            props.modal.style.display = "none";
        };
        //restart btn
        props.modal.children[2].onclick = (e) => {
            //set def value
            props.modal.style.display = "none";
            restart();
        };
        props.modal.children[3].onclick = (e) => {
            window.location.href = "http://localhost:8000/";
        };
    }

})

const restart = (type) => {
    //set default values
    props.inPlay = false;
    ghost.orangeGhost.pos = 404;
    ghost.pinkGhost.pos = 405;
    ghost.redGhost.pos = 406;
    ghost.cyanGhost.pos = 407;

    player.posX = 425;
    player.posY = 695;

    player.pause = false;
    player.life = 5;

    type !== "continue" ?
        ((player.score = 0), (player.time.min = 0), (player.time.sec = 0)) :
        (player.countCoin = 0);
    props.notify.style.display = "block";

    //replace to prev class, coin,cookie -> freePath
    for (let i = 0; i < 868; i++) {
        if (props.grid.children[i].type == 9) {
            if (props.grid.children[i].cookie) {
                props.grid.children[i].children[0].classList.replace(
                    "freePath",
                    "cookie"
                );
                props.grid.children[i].type = 4;
            }

            if (props.grid.children[i].coin && i !== 657 && i !== 658) {
                props.grid.children[i].type = 0;
                props.grid.children[i].children[0].classList.replace(
                    "freePath",
                    "coin"
                );
            }
        }
    }

    //set pacman def pos
    obj.pacman.style.transform = `translate(${player.posX}px, ${player.posY}px)`;
    player.rafId = requestAnimationFrame(step);
};
add teleport, cookie
const step = () => {
    if (props.inPlay) {
        player.cool--;
        if (player.cool < 0) {
            // formula = y / 30 * 28 + x / 30, 690/30=23*28 644 + 420/30 = 644 + 14 = 658+1 mapGame[659]
            player.indexMap = Math.floor(
                ((player.posY - 5) / 30) * 28 + (player.posX - 5) / 30
            );
            let currPos = player.indexMap; // 659, next 658 == wall

            if (keys.ArrowLeft) {
                player.indexMap -= 1; //nextPos check if != wall, -> update()
                if (mapGame[player.indexMap] == 1) {
                    player.indexMap = currPos;
                } else {
                    player.posX -= 30;
                }
                //     tt = update("teleportLeft");
            }
            if (keys.ArrowRight) {
                player.indexMap += 1;
                if (mapGame[player.indexMap] == 1) {
                    player.indexMap = currPos;
                } else {
                    player.posX += 30;
                }
            }
            if (keys.ArrowUp) {
                player.indexMap -= 28;
                if (mapGame[player.indexMap] == 1) {
                    player.indexMap = currPos;
                } else {
                    player.posY -= 30;
                }
            }
            if (keys.ArrowDown) {
                player.indexMap += 28;
                if (mapGame[player.indexMap] == 1) {
                    player.indexMap = currPos;
                } else {
                    player.posY += 30;
                }
            }
            if (mapGame[player.indexMap] === 0) {
                //currentPos && nextPos != tedleport
                player.score += 10;
                mapGame[player.indexMap] = 9;
                temp[player.indexMap].children[0].style.opacity = 0;
            }
            //paint - next || curr == 9
            if (mapGame[player.indexMap] !== 1) {
                // props.pacman.style.transform = `translate(${player.posX}px, ${player.posY}px)`;
                obj.pacman.style.transform = `translate(${player.posX}px, ${player.posY}px)`;
            }
            player.cool = player.speed; //speed * 16.7 each 100ms raf  check inside if cond
        }
        player.rafId = requestAnimationFrame(step);
    }
};

const createBoard = () => {
    //create each block -> get data from mapGame array
    mapGame.forEach((el, idx) => {
        createBlock(el);
    });

    // get static elems -> add in Obejct, then add array - tags, change values -> render new value
    for (let i = 0; i < props.size; i++) {
        props.x += 30 + "px "; //cell grid height, width count - for grid
    }
    // 31 count height field Map
    for (let i = 0; i < props.h; i++) {
        props.y += 30 + "px "; //cell grid rows count, 31px
    }
    //set grid rows, columns, size - count
    props.grid.style.gridTemplateColumns = props.x;
    props.grid.style.gridTemplateRows = props.y;
    //board localy dom, props.grid -> in DOm browser inserted
};

const createBlock = (type) => {
    let div = document.createElement("div");
    div.classList.add("box");
    //create new div -> add class, append object - props.grid
    if (type === 0) {
        const coin = document.createElement("div");
        coin.classList.add("coin");
        div.append(coin);
    } else if (type === 1) {
        let wall = document.createElement("div");
        wall.classList.add("wall");
        div.append(wall);
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
    }
    div.type = type;
    temp.push(div);
    props.grid.append(div);
};