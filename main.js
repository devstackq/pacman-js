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
    //keys state
const keys = {
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
    ArrowDown: false,
};
//manage dom elems - coin opacity
const temp = [];
let ghostsArray = [];

const props = {
    x: "", // for grid  row - render style
    y: "",
    h: 31, // height borad, count Y
    size: 28,
    inPlay: false,
};
//test obj, for dumping props object
const obj = {};
let interval;
let killTimer;

const player = {
    posX: 425, //def posX - transform translate
    posY: 695,
    score: 0,
    life: 5,
    indexMap: 658,
    cool: 0,
    speed: 5,
    canKill: false,
    time: {
        sec: 0,
        min: 0,
    },
    countCoin: 0,
    rafId: 0,
    pause: false,
    killTime: 10000,
    transX: "",
    currentPos: 0,
};

const ghosts = {

    pinkGhost: {
        name: "Pinkī",
        goOutBox: false,
        posX: 360,
        posY: 420,
        basePos: 404,
        direct: "right",
        turn: false,
        sequence: [],
        color: "pink",
        // turnLeft: 0,
    },
    orangeGhost: {
        name: "Guzuta",
        goOutBox: false,
        posX: 390,
        posY: 420,
        basePos: 405,
        direct: "up",
        turn: false,
        color: "orange",
    },
    redGhost: {
        name: "Akabei",
        goOutBox: false,
        posX: 420,
        posY: 420,
        basePos: 406,
        direct: "up",
        turn: false,
        color: "red",
    },
    cyanGhost: {
        name: "Aosuke",
        goOutBox: false,
        posX: 450,
        posY: 420,
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
        //chache dom in nodes - addres in Ram
        props.grid = document.querySelector("div.grid");
        obj.pacman = document.querySelector("div.pacman");
        obj.pacman_mouth = document.querySelector("div.pacman_mouth");
        props.modal = document.querySelector("div.modal");
        props.notify = document.querySelector("div.notify");
        props.scoreBoard = document.querySelector("div.scoreBoard");
        //set default pos in Dom
        obj.pacman.style.display = "block";
        obj.pacman.style.transform = `translate3d(425px, 695px,0)`;
        // obj.pacman.style.transition = '0.1s ease'
        obj.redGhost = document.querySelector("div.red");
        obj.orangeGhost = document.querySelector("div.orange");
        obj.pinkGhost = document.querySelector("div.pink");
        obj.cyanGhost = document.querySelector("div.cyan");

        createBoard();
        console.log(props.grid.children.length, temp.length);
    }) :
    null;

document.addEventListener("keyup", (e) => {
    if (e.code in keys) {
        keys[e.code] = false;
        player;
    }
});

const startTime = () => {
    interval = setInterval(() => {
        player.time.sec += 1;
        player.time.sec === 60 ?
            ((player.time.sec = 0), (player.time.min += 1)) :
            0;
    }, 1000);
}

document.addEventListener("keydown", (e) => {
    if (e.code in keys) {
        keys[e.code] = true;
    }
    if (!props.inPlay) {
        props.notify.style.display = "none";
        props.inPlay = true;
        player.rafId = requestAnimationFrame(step);
        //time
        startTime()
    }

    //esc - show modal page
    if (e.code === "Escape") {
        props.modal.style.display = "flex";
        // continue
        props.modal.children[1].style.display = "block";
        player.pause = true;
        window.cancelAnimationFrame(player.rafId);
        clearInterval(interval)

        //continue btn
        props.modal.children[1].onclick = (e) => {
            player.play = requestAnimationFrame(step);
            player.pause = false;
            props.inPlay = true;
            props.modal.style.display = "none";
            startTime()
        };
        //restart btn
        props.modal.children[2].onclick = (e) => {
            //set def value
            props.modal.style.display = "none";
            restart("restart");
        };
        props.modal.children[3].onclick = (e) => {
            window.location.href = "http://localhost:8000/";
        };
    }
});

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

    player.countCoin = 0;
    player.time.min = 0;
    player.time.sec = 0;

    if (type == "tryAgain") {
        player.life == 0 ? (player.score = 0) : player.score;
    }
    if (type == "restart") {
        player.life = 5;
        player.score = 0;
    }

    props.notify.style.display = "block";
    //update time
    clearInterval(interval);
    props.scoreBoard.children[0].textContent = `Score ${player.score} Lives ${player.life}  Time: ${player.time.min}m:${player.time.sec}s`;

    //return opacity coin elem
    for (let i = 0; i < 868; i++) {
        if (props.grid.children[i].children[0] != undefined) {
            if (props.grid.children[i].children[0].className == "coin") {
                props.grid.children[i].children[0].style.opacity = 1;
            }
        }
    }
    //set pacman def pos
    obj.pacman.style.transform = `translate3d(${player.posX}px, ${player.posY}px, 0px)`;
    player.rafId = requestAnimationFrame(step);
};

const endGame = () => {
    props.modal.children[0].textContent = `Congrats, Yeap!  Your Score ${player.score} Lives ${player.life}  Time: ${player.time.min}m:${player.time.sec} s`;
    props.modal.style.display = "flex";
    player.pause = true;

    props.modal.children[0].style.display = "block";
    props.modal.children[2].style.display = "block";
    props.modal.children[3].style.display = "block";

    props.modal.children[2].onclick = (e) => {
        restart();
    };
    //main menu
    props.modal.children[3].onclick = (e) => {
        e.preventDefault();
        window.location.href = "http://localhost:8000/";
    };
};

const killGhost = (time) => {
    if (player.canKill) {
        obj.pacman.style.backgroundColor = "red";
        killTimer = setTimeout(() => {
            player.canKill = false;
            obj.pacman.style.backgroundColor = "#fff";
            // manageGhosts("goAway"); //set default color ghost
        }, time); //10sec
    }
};
//add sounds
//if player.canKill -> change BgColor ghosts,
//if ghost == pacman && !killGhost, pacman life -1, else ghost - goToHome, bgChange, score+=200
//algo bots
//mapGame data structure change ? - GC, objects see
// dom elems change ?

//audit hint
// 6speed - norm, without trans, 15-20s
// зажимать move key,
// на стену не идти все пути гладко проходить 
// wiil cahnge without will change - no differ
// without transition
// no use teleport, and coin
// gc - off - perfomance tools
//chrome - work - will cahnge

// chrome - audiit- show realtime fps - beacuse layer Work

//how to correct use TT - Reshalkin
//obj.redGhost.style.transform = `translate3d(100px, 200px,0px)`

//TODO
// layout, paint ngc,
// each ghost - use webworker, pacman
//audit webpage
//create bot center Map
//add sounds

const turnNow = (curr) => {
    let dir = ghost.redGhost.direct;

    dir === "left" ?
        (curr -= 1) :
        dir === "right" ?
        (curr += 1) :
        dir === "up" ?
        (curr -= 28) :
        (curr += 28);
    // console.log(dir, curr)
    let type = props.grid.children[curr].type;

    if (type !== 1 && type !== 2) {
        ghost.redGhost.direct =
            dir === "left" ?
            "left" :
            dir === "right" ?
            "right" :
            dir === "up" ?
            "up" :
            "down";
        ghost.redGhost.turn = true;
        return;
    } else {
        ghost.redGhost.turn = false;
    }
};

//stupid bot, random position
let directsX = ["left", "right"];
let directsY = ["up", "down"];

//exlude prev direct, then change direct, reset
//case currDir = left, if nextPost ==1, and downDirect nextPos == 1, gotoUp

const iCanGo = (direct, typeGhost) => {

    let randomNumber = Math.floor(Math.random() * 2);

    ghosts[typeGhost].basePos = Math.floor(
        (ghosts[typeGhost].posY / 30) * 28 + ghosts[typeGhost].posX / 30
    );

    if (direct === "left") {
        // if not wall, != another ghost || equal pacman
      if ( mapGame[ghosts[typeGhost].basePos-1] !== 1) {
            ghosts[typeGhost].basePos-=1
    ghosts[typeGhost].posX -= 30;
        } else {
            ghosts[typeGhost].direct = directsY[randomNumber];
            // recutsive iCanGo('right', curr)
        }
    }
    if (direct === "right") {
        if ( mapGame[ghosts[typeGhost].basePos+1] !== 1) {
            ghosts[typeGhost].basePos+=1
    ghosts[typeGhost].posX += 30;
        } else {
            ghosts[typeGhost].direct = directsY[randomNumber];
        }
    }

    if (direct === "up") {

        if ( mapGame[ghosts[typeGhost].basePos-28] !== 1 ) {
        ghosts[typeGhost].posY -= 30;
        ghosts[typeGhost].basePos-=28
        } else {
            ghosts[typeGhost].direct = directsX[randomNumber];
        }
    }

    if (direct === "down") {
         if (mapGame[ghosts[typeGhost].basePos+28] !== 1 ) {
        ghosts[typeGhost].posY += 30;
        ghosts[typeGhost].basePos+=28
        } else {
            ghosts[typeGhost].direct = directsX[randomNumber];
        }
    }
};

const step = () => {

    if (props.inPlay) {

        ghosts.cool--;

        if (ghosts.cool < 0) {

            iCanGo(ghosts.redGhost.direct, 'redGhost'); // change can=true
            iCanGo(ghosts.orangeGhost.direct, 'orangeGhost'); 

            //another algo
            ghosts.cool = 5;
            // console.log(ghosts.redGhost.posX, ghosts.redGhost.posY);
            obj.redGhost.style.transform = `translate3d(${ghosts.redGhost.posX}px, ${ghosts.redGhost.posY}px, 0px)`;
                 obj.orangeGhost.style.transform = `translate3d(${ghosts.orangeGhost.posX}px, ${ghosts.orangeGhost.posY}px, 0px)`;
        }
        player.cool--;

        if (player.cool < 0) {
            player.indexMap = Math.floor(
                ((player.posY - 5) / 30) * 28 + (player.posX - 5) / 30
            );
            // formula = y / 30 * 28 + x / 30, 690/30=23*28 644 + 420/30 = 644 + 14 = 658+1 mapGame[659]
            if (keys.ArrowLeft) {
                player.indexMap -= 1;
                if (mapGame[player.indexMap] !== 1) {
                    player.posX -= 30;
                    player.transX = "translateX(0%)";
                    //replace classs -> show layer
                }
            }
            if (keys.ArrowRight) {
                player.indexMap += 1;
                if (mapGame[player.indexMap] !== 1) {
                    player.posX += 30;
                    player.transX = "translateX(100%)";
                    // obj.pacman_mouth.style.transform = "translateX(100%)";
                }
            }
            if (keys.ArrowUp) {
                // get inde - when event
                player.indexMap -= 28;
                if (mapGame[player.indexMap] !== 1) {
                    player.posY -= 30;
                }
            }
            if (keys.ArrowDown) {
                player.indexMap += 28;
                if (mapGame[player.indexMap] !== 1 && mapGame[player.indexMap] !== 6) {
                    player.posY += 30;
                }
            }

            if (mapGame[player.indexMap] !== 1) {
                if (mapGame[player.indexMap] === 0 || mapGame[player.indexMap] === 4) {
                    if (mapGame[player.indexMap] === 0) {
                        player.score += 10;
                        player.countCoin++;
                    }
                    if (mapGame[player.indexMap] === 4) {
                        player.score += 50;
                        player.canKill = true;
                        // player.killTime += lastTime
                        clearTimeout(killTimer);
                        killGhost(player.killTime);
                        player.countCoin++;
                    }
                    mapGame[player.indexMap] = 9;

                    if (mapGame[player.indexMap] === 8) {
                        if (keys.ArrowLeft) {
                            player.posX += 840;
                        } else if (keys.ArrowRight) {
                            player.posX -= 840;
                        }
                    }

                    //reload game
                    if (player.countCoin === 244 && player.life > 0) {
                        console.log(" next try");
                        restart("tryAgain");
                    }
                    //win state
                    if (player.countCoin === 244 && player.life === 0) {
                        console.log("win");
                        endGame();
                        window.cancelAnimationFrame(player.rafId);
                    }
                }

                if (mapGame[player.indexMap] === 8) {
                    if (keys.ArrowLeft) {
                        player.posX += 840;
                    } else if (keys.ArrowRight) {
                        player.posX -= 840;
                    }
                }
                //if not !doorEnemy & teleport
                if (
                    player.indexMap !== 391 &&
                    player.indexMap !== 420 &&
                    player.indexMap !== 350 &&
                    player.indexMap !== 349
                ) {
                    temp[player.indexMap].children[0].style.opacity = 0;
                    obj.pacman_mouth.style.transform = player.transX;
                    obj.pacman.style.transform = `translate3d(${player.posX}px, ${player.posY}px, 0)`;
                }


                // props.grid.children[player.indexMap+1].children[0].className='' // transform translate new pos, change class ?
            }
// console.log(player.indexMap , ghosts.redGhost.basePos)
            if (player.indexMap === ghosts.redGhost.basePos && player.killGhost) {
                //goHome() ghost
                player.score += 200
                console.log('go kill ghost, ghost return base')
            }

             if (player.indexMap === ghosts.redGhost.basePos && !player.killGhost) {
    console.log('pacman go  base, life-=1')
  player.life--;
             }

            player.cool = 6;
            //speed * 16.7 each 100ms raf  check inside if cond
            //show scoreboard
            props.scoreBoard.children[0].textContent = `Score ${player.score} Lives ${player.life}  Time: ${player.time.min}m:${player.time.sec}s`;
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
    temp.push(div);
    props.grid.append(div);
};