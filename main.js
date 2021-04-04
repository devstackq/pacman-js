 const mapGame = [
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,4,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,4,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,
  1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
  1,1,1,1,1,1,0,1,1,1,1,1,9,1,1,9,1,1,1,1,1,0,1,1,1,1,1,1,
  3,3,3,3,3,1,0,1,1,1,1,1,9,1,1,9,1,1,1,1,1,0,1,3,3,3,3,3,
  3,3,3,3,3,1,0,1,1,9,9,9,9,9,9,9,9,9,9,1,1,0,1,3,3,3,3,3,
  3,3,3,3,3,1,0,1,1,9,1,1,1,6,6,1,1,1,9,1,1,0,1,3,3,3,3,3,
  1,1,1,1,1,1,0,1,1,9,1,1,9,9,9,9,1,1,9,1,1,0,1,1,1,1,1,8,
  9,9,9,9,9,9,0,9,9,9,1,1,2,2,2,2,1,1,9,9,9,0,9,9,9,9,9,9,
  8,1,1,1,1,1,0,1,1,9,1,1,1,1,1,1,1,1,9,1,1,0,1,1,1,1,1,1,
  3,3,3,3,3,1,0,1,1,9,1,1,1,1,1,1,1,1,9,1,1,0,1,3,3,3,3,3,
  3,3,3,3,3,1,0,1,1,9,9,9,9,9,9,9,9,9,9,1,1,0,1,3,3,3,3,3,
  3,3,3,3,3,1,0,1,1,9,1,1,1,1,1,1,1,1,9,1,1,0,1,3,3,3,3,3,
  1,1,1,1,1,1,0,1,1,9,1,1,1,1,1,1,1,1,9,1,1,0,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,4,0,0,1,1,0,0,0,0,0,0,0,9,9,0,0,0,0,0,0,0,1,1,0,0,4,1,
  1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
  1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
  1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
  1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
  1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
];

const keys = {
  ArrowLeft: false,
  ArrowRight: false,
  ArrowUp: false,
  ArrowDown: false,
}
const temp = []
const obj = {
  indexDom: 0,
  rafId: 0,
  posX: 425, //half width pacman - 10
  posY: 695, // + height pacman
  x: "",
  y: "",
  h: 31, // height each block
  size: 28,
  inPlay: false,
  cool: 0,
};

const player = {
  score: 0,
};

document.addEventListener("DOMContentLoaded", () => {
  obj.pacman = document.getElementById("pacman");
  obj.grid = document.getElementById("grid");
  createBoard();
});

document.addEventListener("keyup", (e) => {
  if (e.code in keys) {
    keys[e.code] = false;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code in keys) {
    keys[e.code] = true;
  }
  if (!obj.inPlay) {
    obj.inPlay = true;
    // obj.pacman.style.display = "block";
    // obj.pacman.style.transition = ".2s ease";
    // obj.pacman.style.transform = " translate(425px, 695px)";
    obj.rafId = requestAnimationFrame(step);
}
});

// define parent,
// if pacman pos x, y ==

// correct - > show index - y - , & y
// correct set position in pacaman in Map

// todo logic - pacman ConvolverNode, x 420 / 30 + y 660 = 674 index Dom,
//     if obj.grid.children[indexDom].type == 1, no tanfosrTransalte,
//     if type == 0, replace value this dom elems,
//     class freepath, add score, type = 9

//transition - and ghost move -> check fps
//try use webworker - another thread - fro each ghost
// try use - scale , rotate, tansform 3d element
// opacity - change bg color - killGhost, scale pacman
// static eleme change -> use tanasform will change -> change class, -> static elems event

// set bound in Map - for pacman, if type 0, score+=10, etc
//computing posit -> inside func, not Dom
//get posx, posy -> get in mapGame - by Index - type value,  if type ==1, etc

//if currPos == freePath || coin && currPos == pacman width -20px, -> goToDirect()

// check fps, with opacity teleport ? avg 59 ? norm

// 873 length dom, with pacamn & ghosts
//child len - 869, with pacman + 4 ghost - 873 length

// block doorEnemy, todoTeleport, replace class ?
//     if cookie
// add ghosts - check fps

/* if(obj.rafId % 30===0) {
  obj.indexDom--; //nextPos check if != wall, -> update()
//webWorker?
  } */

  //https://www.the-art-of-web.com/css/css-animation/
  //https://blog.logrocket.com/using-webworkers-for-safe-concurrent-javascript-3f33da4eb0b2/
  // /https://developer.chrome.com/docs/devtools/speed/get-started/
  //https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution  
  // https://blog.teamtreehouse.com/efficient-animations-with-requestanimationframe

const step = () => {
  // let speed = 2, add 2 px, withou cooldown in RAF
  //ideas #12 if currPos objX < 15 -> mod = objX % 30, objX-=mod else objX += mod
  if (obj.inPlay) {
    obj.cool--;
    if (obj.cool < 0) {
      // formula = y / 30 * 28 + x / 30, 690/30=23*28 644 + 420/30 = 644 + 14 = 658+1 mapGame[659]
    obj.indexDom = Math.floor(((obj.posY - 5) / 30) * 28 + (obj.posX - 5) / 30);

      let currPos = obj.indexDom; // 659, next 658 == wall

      if (keys.ArrowLeft) {
        obj.indexDom--; //nextPos check if != wall, -> update()
        if (mapGame[obj.indexDom] == 1 ) {
          obj.indexDom = currPos
        }else {
          obj.posX -= 30
        }
      //   }else if (mapGame[obj.indexDom] == 8) {
      //     tt = update("teleportLeft");
      // }
    }
      if (keys.ArrowRight) {
        obj.indexDom++;
        if (mapGame[obj.indexDom] == 1 ) {
          obj.indexDom = currPos
        }else {
        obj.posX += 30

        }
      }
      if (keys.ArrowUp) {
        obj.indexDom -= 28;
        if (mapGame[obj.indexDom] == 1 ) {
          obj.indexDom = currPos
        }else {
          obj.posY-=30
        }
      }
      if (keys.ArrowDown) {
        obj.indexDom += 28;
        if (mapGame[obj.indexDom] == 1 ) {
          obj.indexDom = currPos
        }else {
          obj.posY+=30
        }
      }

      if (mapGame[obj.indexDom] === 0) {
        //currentPos && nextPos != tedleport
        player.score += 10;
        mapGame[obj.indexDom] = 9;
      }      
      obj.cool = 4; //6* 16.7 each 100ms raf  check inside if cond
    }
      // obj.grid.children[obj.indexDom+1].children[0].style.opacity = 0;
      temp[obj.indexDom].children[0].style.opacity = 0;
      obj.pacman.style.transform = `translate(${obj.posX}px, ${obj.posY}px)`;
    obj.rafId = requestAnimationFrame(step);
  }
};

//composite layer, garbage collector

//currPos 870 % 30  != 0, if currPos  % 30 < 15, = currPos -=15 else currPos- currPos% 30 + 30

const createBoard = () => {
  //create each block -> get data from mapGame array
  mapGame.forEach((el, idx) => {
    createBlock(el, idx);
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
  // console.log("created board", 2, obj.grid.children[646]);
};

const createBlock = (type, index) => {
  let div = document.createElement("div");
  div.classList.add("box");
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
  }else if (type === 9) {
  
    let free = document.createElement("div");
  free.classList.add("free");
  div.append(free);
}
  div.type = type;
temp.push(div)
  // div.idVal = board.length;
  obj.grid.append(div);
};
