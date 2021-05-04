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
    KeyA: false,
    KeyD: false,
    KeyW: false,
    KeyS: false,
    restart: false,
    death: false,
};

let rafId = 0;

//manage dom elems - coin opacity
const mapItemsInDom = [];
//for dumping props object, add pacamn & ghost Dom objects
const obj = {};
//clear interval - when temeout 10sec
let interval;

const props = {
    x: "", // for grid row - first render items in Dom - set grid style
    y: "",
    h: 31, // height borad, count Y
    size: 28,
    inPlay: false, // play state
    time: {
        sec: 0,
        min: 0,
    },
    skip: false,
    sceneType: "",
    mainMenu: true,
};

//unit objects - for manipualte game
let unitsMT = {
    pinkGhost: {
        posX: 360,
        posY: 420,
        basePos: 404,
        direct: "right",
    },
    orangeGhost: {
        posX: 390,
        posY: 420,
        basePos: 405,
    },
    redGhost: {
        posX: 420,
        posY: 420,
        basePos: 406,
    },
    cyanGhost: {
        posX: 450,
        posY: 420,
        basePos: 407,
        direct: "up",
    },
    pacman: {
        posX: 425,
        posY: 695,
        basePos: 658,
        transX: "",
        indexMap: 0,
        life: 5,
        score: 0,
        countCoin: 0,
        canKill: false,
        pause: false,
    },
    cool: 0,
};

const history = {
    prologue: [
        "В паралельной вселенной, есть такая планета Noveus2D, это двумерный мир со своими правилами и законами, ее наслеяют разные сказочные обитатели, от лилипутов-жирафов до розовых единорогов. Все они жили мирно и счастливо, пока однажды не случилась беда...",
        "На планету упал астероид. Ученые начали выяснять, что это за объект. Проводя эксперементы и исследования, выяснялось что на этом астероиде находится мутирующий вирус...",
        "Он прибыл с другой планеты - Terra, но все это уже было поздно...",
        "В течении 3 дней и 3 ночей, вирус смог заразить ученых и начал распространться по экспоненте.  Черное бремя наступило для сказочных обителей планеты Noveus2D...",
        "Через время появились они... Это те рыцари, великие спасатели, герои нашего времени - прозвали их Пакманами, что означает на древнем языке - беспощадный убийца летучих падонков. Или в простонародии - чистильщики...",

        "Пакманы это бывшие военные, большинство из них потеряли свои семьи из-за летучих падонков, и им уже нечего терять... Пакманы сотрудничают с лабороторией X69, где изучается вирус и разрабатывается вакцина...",
        "В мире их осталось не так много, но те что остались,  идут от города к городу рискуя своей жизнью, что бы очистить этот грязный город BloodyBoobs и вакцинировать зараженных...",
        "Если повезет...",
        "Вирус превращал из любого кто попадался ему на пути - в огромную и сильную летучую мышь, помимо физиологической деформации, вирус также завладевал разумом, что теперь зараженый становился рабом вируса и выполнял функцию распространителя...",
        "Те же кто уже заразился, местные называли их - ",

        "ЛЕТУЧИЕ ПОДОНКИ...",
        "Зараженые интуитивно искали своих здоровых собратьев, обхватив их крыльями они крепко держали жертву и целовали его в засос...",
        "Так вирус и передовался, процесс был долгим и мучительным...",
        "Вирус заполонил многие города, некоторые вовсе исчахли...",
        "Единственная надежда жителей города BloodyBoobs, это Пакман",

        "Если пакман появляется в городах, то все жители страраются помочь им, даруя жизни и пропитание...",
        "Находи ящики с вакционой Sugar V, с их помощью ты можешь лечить зараженых, не боясь заразиться, т.к летучие подонки бояться Пакманов с вакционой, но время жизни вакцин ограничено...",
        "Но имей ввиду, излечив одного, обязательно появятся новый зараженный, который будет патрулировать город..",
    ],
    takeMedical: "Вы нашли ящик с вакционой Sugar V, теперь вы можете лечить зараженых, не боясь заразиться, т.к летечие подонки бояться Пакманов с вакционой, но время жизни вакцин ограничен... Имейте ввиду, леча одного появится обязательно новые зараженные, которые будут патрулировать город",
    death: "Ну ничего страшного, тяу тяу тяу. Местные верят в тебя и даруют тебе еще 1 жизнь, но помни, жизни ограничены...",
    lose: [
        "Все те жизни которые были даны Пакману, это души младецнов, ибо только их души способны даровать жизнь...",
        "В городе BloodyBoobs больше не осталось младенцов...(",
        "Местные остались без надежды и теперь они будут умирать долго и мучительно от поцелуев летучих подонков...",
        "Если только не придет, новый чистильщик...",
    ],
    win: [
        "Рискуя жизнью, ты даришь надежду этому городу!",
        "Дни и ночи не покладая рук ты боролся с нечистью и теперь этот грязный город очищен...",
        "+10 к ЧСВ, +10 к карме, Ты лучший!",
        "Местные благодарны и некотрые даже начали называть своих детей твоим именем...",
        "Оставшихся зараженых вакцинировали и они  вновь обратились  в себя...",
        "Тебя запомнят как великого и бесстрашного спасителя! И будут рассказывать своим внукам еще не 1 десяток лет...",
        "Несколько дней продолжались гуляния на главной площади...",
        "Но вот что тревожило Пакмана, что есть еще кучу других городов и надо бы туда отправляться...",
        "Отдохнув и набрав сил, Пакман исчез из BloodyBoobs...",
    ],
};
let intro = new Audio('./assets/intro.mp3')

//dom onladed -> get grid elem, -> append - block, then manipulate this dom object, etc
document.addEventListener("DOMContentLoaded", () => {
    //save cache dom in nodes - addres in Ram - > then change by pointer
    props.grid = document.querySelector("div.grid");
    props.modal = document.querySelector("div.modal");
    props.notify = document.querySelector("div.notify");
    props.scoreBoard = document.querySelector("div.scoreBoard");
    obj.pacman = document.querySelector("div.pacman");
    obj.pacman_mouth = document.querySelector("div.pacman_mouth");
    //set default pos in Dom
    obj.redGhost = document.querySelector("div.red");
    obj.orangeGhost = document.querySelector("div.orange");
    obj.pinkGhost = document.querySelector("div.pink");
    obj.cyanGhost = document.querySelector("div.cyan");
    intro.play()
    createBoard();
    showHide();
});

document.addEventListener("keyup", (e) => {
    if (e.code in keys) {
        keys[e.code] = false;
    }
});

const startTime = () => {
    props.notify.style.display = "none";
    //  props.time.sec === 60 ? ((props.time.sec = 0), (props.time.min += 1)) : 0; def time
    interval = setInterval(() => {
        props.time.sec += 1;
        props.time.sec === 30 ? ((props.time.sec = 0), (props.time.min += 1)) : 0;
    }, 1000);
};

const showHide = (type) => {
    //main menu
    if (props.mainMenu) {
        //DRY
        props.modal.style.background = "rgba(0, 0, 0, 0)";
        props.modal.style.display = "block";
        props.modal.children[0].textContent = "";
        props.modal.children[1].style.display = "none";
        props.modal.children[3].style.display = "none";
        props.modal.children[2].style.display = "none";
        props.modal.children[4].style.display = "block";
        let links = document.getElementsByClassName("links")[0];
        //if start game,
        links.children[0].addEventListener("click", function() {
            props.modal.children[4].style.display = "none";
            props.modal.children[3].style.display = "flex";
            //each start -> restore data
            props.mainMenu = false;
            restart();
            props.sceneType = "prologue";
            showFirst(props.sceneType);
        });
        props.mainMenu = false;
    }
    intro.pause()
};
let audio = null
//show first image & audio
const showFirst = (type) => {
    
    let text = [];
    text = [...history[type]];
    let firstImage = props.modal.children[3].children[0];
    firstImage.src = `./assets/${type}${1}.png`;
    props.modal.children[3].children[1].textContent = text[0];
//first audio
if(audio) {
    audio.pause()
}
     audio = new Audio(`./assets/${type}${1}.aac`);
    audio.play()
   
};

let text = [];
let textPos = 0;
let lastPos = 0;
let chomp = new Audio("./assets/chomp.aac");
let death = new Audio("./assets/death.aac");


document.addEventListener("keydown", (e) => {
    if (e.code in keys) {
        keys[e.code] = true;
    }
    if (props.sceneType === "" && !props.mainMenu) {
        unitsMT.pacman.pause = false;
    }
    // /(e.key == "n" || e.key == "p" || e.key === " ")
    if (props.sceneType == "lose" || props.sceneType == 'win' || props.sceneType == 'prologue') {
        props.skip = false
        let msg = "";
        let prefix = props.sceneType;
        let img = props.modal.children[3].children[0];
        text = [...history[prefix]]; // copy array data, not change by reference

        if (prefix === "lose" || prefix === "win") {
            if (prefix === "win") {
                msg = "Твое достижение останется на скалах предков... ";
            }
            if (prefix === "lose") {
                msg = "Ты умер раз и навсегда... пока! ";
            }
            //push - stats
            msg += ` ${unitsMT.pacman.score} Lives:${unitsMT.pacman.life}  months:${props.time.min} days:${props.time.sec}  `;
            text = [...text, msg];
        } else if (prefix === "prologue") {
            msg = ` Теперь все в твоих руках... В бой юный подован! `;
            text = [...text, msg];
        }
        //hide menu, show hist
        props.modal.children[1].style.display = "none";
        props.modal.children[3].style.display = "flex";
        lastPos = text.length;
        //first image & text
        unitsMT.pacman.pause = true;

        if (e.code === "KeyN" || e.code === "KeyP" || e.code === "Space") {
            if (e.code === "KeyP" && textPos > 0) {
                textPos--;
                //get audio, play, if next || prev pause current, play next
                if (audio) {
                    audio.pause()
                }
                audio = new Audio(`./assets/${prefix}${textPos + 1}.aac`);
                audio.play()
            } else if (e.code === "KeyN" && textPos <= lastPos) {
                textPos++;
                if (audio) {
                    audio.pause()
                }
                audio = new Audio(`./assets/${prefix}${textPos + 1}.aac`);
                audio.play()
            }
                //hide faq
            if (textPos === 1) {
                props.modal.children[3].children[2].style.display = "none";
            }
            img.onerror = function(e) {
                img.style.display = "none";
                props.modal.children[3].children[1].style.bottom = "40%";
            };
            //img
            img.onload = function(e) {
                img.style.display = "block";
                props.modal.children[3].children[1].style.bottom = "5%";
            };
            //get elems in Dom by ref - update path src
            img.src = `./assets/${prefix}${textPos + 1}.png`;
            //text
            props.modal.children[3].children[1].textContent = text[textPos];

            if (e.code == "Space" || textPos == lastPos) {
                //skip case, after scene
                if (prefix === "win" || prefix === "lose") {
                    // case : win || lose -> show menu, else -> prologue -> hidden all
                    props.modal.style.display = "block";
                    props.modal.children[1].style.display = "flex";
                    props.modal.children[3].style.display = "none";
                    props.modal.children[1].children[0].style.display = "none";
                } else {
                    props.modal.style.display = "none";
                }
                props.sceneType = "";
                text = [];
                textPos = 0;
                unitsMT.pacman.pause = false;
                props.skip = true
                audio.pause()

            }
        }
    }
    //move pacman
    if (!props.mainMenu && props.skip) {
        if (
            e.code === "KeyA" ||
            e.code === "KeyD" ||
            e.code === "KeyS" ||
            e.code === "KeyW"
        ) {
            //cahnge bg pacman & ghost if canKill
            if (unitsMT.pacman.canKill) {
                obj.pacman.style.background = "red";
                obj.redGhost.style.opacity = ".4";
                obj.orangeGhost.style.opacity = ".4";
                obj.pinkGhost.style.opacity = ".4";
                obj.cyanGhost.style.opacity = ".4";
            } else {
                obj.pacman.style.background = "yellow";
                obj.redGhost.style.opacity = "1";
                obj.orangeGhost.style.opacity = "1";
                obj.pinkGhost.style.opacity = "1";
                obj.cyanGhost.style.opacity = "1";
            }
            if (unitsMT.pacman.death) {
                //keuyframe ?
                if (unitsMT.pacman.life === 4) {
                    death.play()
                }
                obj.pacman.style.opacity = ".4";
            } else {
                obj.pacman.style.opacity = "1";
            }

            if (!props.inPlay) {
                props.inPlay = true;
                props.rafId = requestAnimationFrame(step);
                startTime();
            }
        } else if (e.code === "Escape" && !props.mainMenu) {
            props.sceneType = "escape";
            endGame();
        }
    }
});
//transform translate each item - change posit 0 in Dom
const render = (...args) => {
    args.forEach((el, i) => {
        obj[el.nick].style.transform = `translate(${el.posX}px, ${el.posY}px)`;
    });
};

const restart = () => {
    //set default values
    props.inPlay = false;
    props.time.min = 0;
    props.time.sec = 0;
    keys.restart = true;
    //set def value in main Thread
    unitsMT.pacman.posX = 425;
    unitsMT.pacman.posY = 695;
    unitsMT.pacman.indexMap = 658;
    unitsMT.pacman.life = 5;
    unitsMT.pacman.countCoin = 0;
    unitsMT.pacman.score = 0;

    // obj.pacman.style.transform = `translate(${unitsMT.pacman.posX}px, ${unitsMT.pacman.posY}px)`;
    //show notify
    props.notify.style.display = "block";
    props.modal.children[1].children[0].style.display = "block";
    //update time
    clearInterval(interval);
    //return opacity coin elem, set timeout?
    for (let i = 0; i < 869; i++) {
        if (props.grid.children[i].children[0] !== undefined) {
            if (
                props.grid.children[i].children[0].className === "coin" ||
                props.grid.children[i].children[0].className === "cookie"
            ) {
                props.grid.children[i].children[0].style.opacity = 1;
            }
        }
    }
    unitsMT.pacman.pause = false;
};

const endGame = () => {
    //show hide menu items
    props.modal.style.display = "block";
    if (props.sceneType === "escape") {
        props.modal.children[1].style.display = "flex";
        props.modal.children[3].style.display = "none";
        props.mainMenu = false;
        unitsMT.pacman.pause = true;
        //continue btn
        props.modal.children[1].children[0].onclick = (e) => {
            rafId = requestAnimationFrame(step);
            unitsMT.pacman.pause = false;
            props.inPlay = true;
            props.modal.style.display = "none";
            startTime();
            props.modal.children[1].style.display = "none";
        };
    } else if (props.sceneType === "win" || props.sceneType === "lose") {
        // show only text
        showFirst(props.sceneType);
        // then show menu hide text
    }
    //onclick menu  //restart btn
    props.modal.children[1].children[1].onclick = (e) => {
        //set def value,  hide modal
        props.modal.children[1].style.display = "none";
        restart();
    };
    //main menu, goTo mainMenu
    props.modal.children[1].children[2].onclick = (e) => {
        props.mainMenu = true;
        showHide();
        //show menu, another hide
    };
};

const step = () => {
    if (props.inPlay) {
        unitsMT.cool--;
        if (unitsMT.cool < 0) {
            worker.port.postMessage({ key: keys }); //key state - pacman
            //not use forEach, receive data from bg thread - set updated data
            worker.port.onmessage = (e) => {
                unitsMT.cyanGhost.posX = e.data.cyanGhost.posX;
                unitsMT.cyanGhost.posY = e.data.cyanGhost.posY;

                unitsMT.redGhost.posX = e.data.redGhost.posX;
                unitsMT.redGhost.posY = e.data.redGhost.posY;

                unitsMT.orangeGhost.posX = e.data.orangeGhost.posX;
                unitsMT.orangeGhost.posY = e.data.orangeGhost.posY;

                unitsMT.pinkGhost.posX = e.data.pinkGhost.posX;
                unitsMT.pinkGhost.posY = e.data.pinkGhost.posY;
                //set updated data from bg thread
                unitsMT.pacman.posX = e.data.pacman.posX;
                unitsMT.pacman.posY = e.data.pacman.posY;
                unitsMT.pacman.indexMap = e.data.pacman.indexMap;
                unitsMT.pacman.score = e.data.pacman.score;
                unitsMT.pacman.life = e.data.pacman.life;
                unitsMT.pacman.countCoin = e.data.pacman.countCoin;
                unitsMT.pacman.canKill = e.data.pacman.canKill;
                unitsMT.pacman.transX = e.data.pacman.transX;
                unitsMT.pacman.death = e.data.pacman.death;
                keys.restart = e.data.pacman.restart;
            };
            //if changed pacman index, eqaul 4 || 0, add score, change - currentPos = 0, -> currPos = 9
            if (mapGame[unitsMT.pacman.indexMap] !== 1) {
                if (
                    unitsMT.pacman.indexMap !== 391 &&
                    unitsMT.pacman.indexMap !== 420 &&
                    unitsMT.pacman.indexMap !== 350 &&
                    unitsMT.pacman.indexMap !== 349
                ) {
                    //change opacity - coin
                    mapItemsInDom[unitsMT.pacman.indexMap].children[0].style.opacity = 0;
                }
                //change mouth - pacman
                obj.pacman_mouth.style.transform = unitsMT.pacman.transX;
            }
            if (unitsMT.pacman.life > 0) {
                if (unitsMT.pacman.countCoin ===244) {
                    props.sceneType = "win";
                    endGame();
                }
            } else {
                props.sceneType = "lose";
                endGame();
            }
            //render - draw
            obj.pacman.style.transform = `translate(${unitsMT.pacman.posX}px, ${unitsMT.pacman.posY}px)`;
            obj.redGhost.style.transform = `translate(${unitsMT.redGhost.posX}px, ${unitsMT.redGhost.posY}px)`;
            obj.orangeGhost.style.transform = `translate(${unitsMT.orangeGhost.posX}px, ${unitsMT.orangeGhost.posY}px)`;
            obj.cyanGhost.style.transform = `translate(${unitsMT.cyanGhost.posX}px, ${unitsMT.cyanGhost.posY}px)`;
            obj.pinkGhost.style.transform = `translate(${unitsMT.pinkGhost.posX}px, ${unitsMT.pinkGhost.posY}px)`;
            //updated value - render scoreboard
            props.scoreBoard.children[0].textContent = `Score ${unitsMT.pacman.score} Lives:${unitsMT.pacman.life}  months:${props.time.min} days:${props.time.sec} `;
            //cooldwon, 5 * 16.7 -> reaction each 83ms
            unitsMT.cool = 6;
        }
        rafId = requestAnimationFrame(step);
        if (unitsMT.pacman.pause) {
            window.cancelAnimationFrame(rafId);
        }
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

//if frame drop, transition off
//refactor class component, best practice
//add keyframe - when pacman death
//add confetti - if win, if lose - blood confetti
//chrome fps - 120ms / 16.7 * 8fps = 57fps 1 frame(16.7) - 8fps

//scoreboard -> when lose || win -> show input , where user - enter own name -> json file -> open and save score, time, etc -> 
//if go to score.html -> get all data, sorted  by coin & time