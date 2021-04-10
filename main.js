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
  ]

//1 wall, 0 coin, 4 cookie, 8 teleport, 3 -empty, 9 freepath

//for work - another thread calculate hard func
const worker = new SharedWorker("worker.js", {
    type: "module",
    name: "sharedWorker",
});

//keys state, l/r/u/d
const keys = {
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
    ArrowDown: false,
};

//manage dom elems - coin opacity
const mapItemsInDom = [];
//for dumping props object, add pacamn & ghost Dom objects
const obj = {};
//clear interval - when temeout 10sec
let interval;
let killTimer;
let arrGhosts = [];

const props = {
    x: "", // for grid row - first render items in Dom - set grid style
    y: "",
    h: 31, // height borad, count Y
    size: 28,
    inPlay: false, // play state
};

//pacman object
const player = {
    posX: 425, //def posX - transform translate
    posY: 695,
    score: 0,
    life: 5,
    indexMap: 658, // index for work []MapGame
    cool: 0,
    speed: 5, //for Raf, 16.7 * 5 = 83ms
    canKill: false, // coin eate
    time: {
        sec: 0,
        min: 0,
    },
    countCoin: 0,
    rafId: 0, // start, stop raf
    pause: false,
    killTime: 10000,
    transX: "", // change mouse pos
    currentPos: 0,
    nick: "pacman",
};
//ghost objects - for manipualte game

const ghosts = {
    pinkGhost: {
        nick: "pinkGhost",
        name: "Pinkī",
        posX: 360,
        posY: 420,
        basePos: 404,
        direct: "right",
        color: "pink",
        freeze: false,
        base: false,
    },
    orangeGhost: {
        nick: "orangeGhost",
        name: "Guzuta",
        posX: 390,
        posY: 420,
        basePos: 405,
        direct: "up",
        color: "orange",
        freeze: false,
        base: false,
    },
    redGhost: {
        nick: "redGhost",
        name: "Akabei",
        posX: 420,
        posY: 420,
        basePos: 406,
        direct: "up",
        color: "red",
        freeze: false,
        base: false,
    },
    cyanGhost: {
        nick: "cyanGhost",
        name: "Aosuke",
        posX: 450,
        posY: 420,
        basePos: 407,
        direct: "left",
        color: "cyan",
        freeze: false,
        base: false,
    },
    cool: 0,
};
//pushed all ghost(object) in array
arrGhosts.push(
    ghosts.cyanGhost,
    ghosts.redGhost,
    ghosts.orangeGhost,
    ghosts.pinkGhost
);

//dom onladed -> get grid elem, -> append - block, then manipulate this dom object, etc
document.URL.includes("play.html") ?
    document.addEventListener("DOMContentLoaded", () => {
        //save cache dom in nodes - addres in Ram - > then change by pointer
        props.grid = document.querySelector("div.grid");
        props.modal = document.querySelector("div.modal");
        props.notify = document.querySelector("div.notify");
        props.scoreBoard = document.querySelector("div.scoreBoard");
        obj.pacman = document.querySelector("div.pacman");
        obj.pacman_mouth = document.querySelector("div.pacman_mouth");
        //set default pos in Dom
        obj.pacman.style.transform = `translate3d(425px, 695px,0)`;
        obj.redGhost = document.querySelector("div.red");
        obj.orangeGhost = document.querySelector("div.orange");
        obj.pinkGhost = document.querySelector("div.pink");
        obj.cyanGhost = document.querySelector("div.cyan");
        createBoard();
        // console.log(props.grid.children.length, temp.length);
    }) :
    null;

document.addEventListener("keyup", (e) => {
    if (e.code in keys) {
        keys[e.code] = false;
    }
    if (player.pause) {
        window.cancelAnimationFrame(player.rafId);
    }
});

const startTime = () => {
    interval = setInterval(() => {
        player.time.sec += 1;
        player.time.sec === 60 ?
            ((player.time.sec = 0), (player.time.min += 1)) :
            0;
    }, 1000);
};

document.addEventListener("keydown", (e) => {
    if (e.code in keys) {
        keys[e.code] = true;
    }
    if (
        e.code === "ArrowLeft" ||
        e.code === "ArrowRight" ||
        e.code === "ArrowDown" ||
        e.code === "ArrowUp"
    ) {
        if (!props.inPlay) {
            props.notify.style.display = "none";
            props.inPlay = true;
            player.rafId = requestAnimationFrame(step);
            //time
            startTime();
        }
    }

    //esc keydown - show modal page
    if (e.code === "Escape") {
        props.modal.style.display = "flex";
        // continue
        props.modal.children[1].style.display = "block";
        player.pause = true;
        window.cancelAnimationFrame(player.rafId);
        clearInterval(interval);
        //continue btn
        props.modal.children[1].onclick = (e) => {
            player.play = requestAnimationFrame(step);
            player.pause = false;
            props.inPlay = true;
            props.modal.style.display = "none";
            startTime();
        };
        //restart btn
        props.modal.children[2].onclick = (e) => {
            //set def value
            props.modal.style.display = "none";
            restart();
        };
        props.modal.children[3].onclick = (e) => {
            window.location.href = "http://localhost:5500/";
        };
    }
});
//transform translate each item - change posit 0 in Dom
const render = (...args) => {
    args.forEach((el, i) => {
        obj[
            el.nick
        ].style.transform = `translate3d(${el.posX}px, ${el.posY}px, 0px)`;
    });
};
const restart = (e) => {

    window.location.reload();

    //set default values
    props.inPlay = false;
    player.pause = false;
    player.posX = 425;
    player.posY = 695;
    player.countCoin = 0;
    player.time.min = 0;
    player.time.sec = 0;

    ghosts.orangeGhost.basePos = 405;
    ghosts.pinkGhost.basePos = 404;
    ghosts.redGhost.basePos = 406;
    ghosts.cyanGhost.basePos = 407;
    ghosts.pinkGhost.posX = 360;
    ghosts.pinkGhost.posY = 420;
    ghosts.orangeGhost.posX = 390;
    ghosts.orangeGhost.posY = 420;
    ghosts.cyanGhost.posX = 450;
    ghosts.cyanGhost.posY = 420;
    ghosts.redGhost.posX = 420;
    ghosts.redGhost.posY = 420;

    ghosts.cool = 0;
    // if (type == "tryAgain") {
    player.cool = 0;
    player.life = 5;
    player.score = 0;
    //show notify
    props.notify.style.display = "block";
    //update time
    clearInterval(interval);
    props.scoreBoard.children[0].textContent = `Score ${player.score} Lives ${player.life}  Time: ${player.time.min}m:${player.time.sec}s`;

    //return opacity coin elem
    for (let i = 0; i <= 868; i++) {
        if (props.grid.children[i].children[0] !== undefined) {
            if (
                props.grid.children[i].children[0].className === "coin" ||
                props.grid.children[i].children[0].className === "cookie"
            ) {
                props.grid.children[i].children[0].style.opacity = 1;
            }
        }
    }
    props.modal.style.display = "none";
};

const endGame = (type) => {
    //show notify - you win
    let msg = "";
    if (type == "win") {
        msg = "Congrats, Yeap! You Win!";
    } else {
        msg = "Game over..";
    }

    props.modal.children[0].textContent = `${msg} Your Score ${player.score} Lives ${player.life}  Time: ${player.time.min}m:${player.time.sec} s`;
    props.modal.style.display = "flex";
    player.pause = true;

    props.modal.children[0].style.display = "block";
    props.modal.children[2].style.display = "block";
    props.modal.children[3].style.display = "block";

    //restart btn
    props.modal.children[2].onclick = (e) => {
        e.preventDefault();
        restart(e);
    };
    //main menu
    props.modal.children[3].onclick = (e) => {
        e.preventDefault();
        window.location.href = "http://localhost:5500/";
    };
};

//if pacman eat cookie - canKill ghost
const killGhost = (time) => {
    if (player.canKill) {
        obj.pacman.style.backgroundColor = "red";
        //ghost change color
        killTimer = setTimeout(() => {
            player.canKill = false;
            obj.pacman.style.backgroundColor = "#fff";
        }, time); //10sec
    }
};

//TODO
// add audio,
//worker for pacman
//add keyframe - when pacman death

const step = () => {
    if (props.inPlay) {
        //worker ?
        player.cool--;
        if (player.cool < 0) {
            //send data - in  worker
            worker.port.postMessage([{
                    dir: ghosts.cyanGhost.direct,
                    ghost: "cyanGhost",
                },
                {
                    dir: ghosts.redGhost.direct,
                    ghost: "redGhost",
                    type: "perimeter",
                },
                {
                    dir: ghosts.orangeGhost.direct,
                    ghost: "orangeGhost",
                    type: "perimeter",
                },
                {
                    dir: ghosts.pinkGhost.direct,
                    ghost: "pinkGhost",
                    type: "square",
                },
            ]);
            //get calculated data from worker, -> set updated value -> render items
            worker.port.onmessage = (e) => {
                arrGhosts.forEach((ghost, idx) => {
                    ghost.direct = e.data[idx][0];
                    ghost.basePos = e.data[idx][1];
                    ghost.posX = e.data[idx][2];
                    ghost.posY = e.data[idx][3];
                });
            };
            //get index - by formula, posX, posY - index for mapGame
            // formula = y / 30 * 28 + x / 30
            player.indexMap = Math.floor(
                ((player.posY - 5) / 30) * 28 + (player.posX - 5) / 30
            );
            //check if key press equal  Right, nextPos in mapGame != 1, update value, goToRight
            if (keys.ArrowLeft) {
                if (mapGame[player.indexMap - 1] !== 1) {
                    player.posX -= 30;
                    player.indexMap -= 1;
                    player.transX = "translateX(0%)";
                }
            } else if (keys.ArrowRight) {
                if (mapGame[player.indexMap + 1] !== 1) {
                    player.indexMap += 1;
                    player.posX += 30;
                    player.transX = "translateX(100%)";
                }
            } else if (keys.ArrowUp) {
                if (mapGame[player.indexMap - 28] !== 1) {
                    player.indexMap -= 28;
                    player.posY -= 30;
                }
            } else if (keys.ArrowDown) {
                if (
                    mapGame[player.indexMap + 28] !== 1 &&
                    mapGame[player.indexMap + 28] !== 6
                ) {
                    player.indexMap += 28;
                    player.posY += 30;
                }
            }
            //if changed pacman index, eqaul 4 || 0, add score, change - currentPos = 0, -> currPos = 9
            if (mapGame[player.indexMap] !== 1) {
                if (mapGame[player.indexMap] === 0 || mapGame[player.indexMap] === 4) {
                    if (mapGame[player.indexMap] === 0) {
                        player.score += 10;
                        player.countCoin++;
                    }
                    //neuyazvimost pacman 10 sec
                    if (mapGame[player.indexMap] === 4) {
                        player.score += 50;
                        player.canKill = true;

                        clearTimeout(killTimer);
                        killGhost(player.killTime);
                        player.countCoin++; // count coin for - check win game
                    }
                    mapGame[player.indexMap] = 9;
                    //check posPacman - isTeleport?
                    if (mapGame[player.indexMap] === 8) {
                        if (keys.ArrowLeft) {
                            player.posX += 840;
                        } else if (keys.ArrowRight) {
                            player.posX -= 840;
                        }
                    }
                    //win state, show modal window with stats
                    if (player.countCoin === 244 && player.life > 0) {
                        endGame("win");
                    }
                }
                //if teleport - update posX
                if (mapGame[player.indexMap] === 8) {
                    if (keys.ArrowLeft) {
                        player.posX += 840;
                    } else if (keys.ArrowRight) {
                        player.posX -= 840;
                    }
                }
                //canKill false -> goHomePacman
                if (!player.canKill) {
                    if (
                        player.indexMap === ghosts.redGhost.basePos ||
                        player.indexMap === ghosts.cyanGhost.basePos ||
                        player.indexMap === ghosts.pinkGhost.basePos ||
                        player.indexMap === ghosts.orangeGhost.basePos
                    ) {
                        //goHomePacman
                        player.life--;
                        player.posX = 425;
                        player.posY = 695;
                        player.indexMap = 658;
                    }
                    if (player.life === 0) {
                        endGame("lost");
                    }
                }
                //if indexPacman != doorEnemy & teleport -> render
                if (
                    player.indexMap !== 391 &&
                    player.indexMap !== 420 &&
                    player.indexMap !== 350 &&
                    player.indexMap !== 349
                ) {
                    //change opacity - coin
                    mapItemsInDom[player.indexMap].children[0].style.opacity = 0;
                }
                //change mouth - pacman
                obj.pacman_mouth.style.transform = player.transX;
                obj.pacman.style.transform = `translate3d(${player.posX}px, ${player.posY}px, 0px)`;
            }
            render(
                ghosts.redGhost,
                ghosts.orangeGhost,
                ghosts.cyanGhost,
                ghosts.pinkGhost
            );
            //updated value - render scoreboard
            props.scoreBoard.children[0].textContent = `Score ${player.score} Lives ${player.life}  Time: ${player.time.min}m:${player.time.sec}s`;
            // render(player);
            player.cool = 6;
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
    } else if (type === 9) {
        let free = document.createElement("div");
        free.classList.add("free");
        div.append(free);
    }
    div.type = type;
    mapItemsInDom.push(div);
    props.grid.append(div);
};