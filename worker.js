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


let directsX = ["left", "right"];
let directsY = ["up", "down"];

const ghosts = {
  pinkGhost: {
    goOutBox: false,
    posX: 360,
    posY: 420,
    basePos: 404,
    direct: "right",
    baseState: false,
  },
  orangeGhost: {
    goOutBox: false,
    posX: 390,
    posY: 420,
    basePos: 405,
    direct: "up",
    baseState: false,
  },
  redGhost: {
    goOutBox: false,
    posX: 420,
    posY: 420,
    basePos: 406,
    direct: "up",
    baseState: false,
  },
  cyanGhost: {
    goOutBox: false,
    posX: 450,
    posY: 420,
    basePos: 407,
    direct: "left",
    baseState: false,
  },
};

const intravenousPerimeter = (direct, typeGhost) => {
  let randomNumber = Math.floor(Math.random() * 2);
  ghosts[typeGhost].basePos = Math.floor(
    (ghosts[typeGhost].posY / 30) * 28 + ghosts[typeGhost].posX / 30
  );
  //go out box
  // if (ghosts.cyanGhost.baseState) {
  //   ghosts.cyanGhost.direct = "left";
  //   ghosts.cyanGhost.posX = 450;
  //   ghosts.cyanGhost.posY = 420;
  //   ghosts.cyanGhost.basePos = 407;
  //   // ghosts.cyanGhost.baseState = false;
  // }
  if (
    (!ghosts[typeGhost].goOutBox && ghosts[typeGhost].basePos === 377) ||
    ghosts[typeGhost].basePos === 378
  ) {
    ghosts[typeGhost].direct = "up";
    ghosts[typeGhost].goOutBox = false;
  }
  //set bound
  if (
    ghosts[typeGhost].direct === "left" &&
    (ghosts[typeGhost].basePos - 1 === 320 ||
      ghosts[typeGhost].basePos - 1 === 569)
  ) {
    ghosts[typeGhost].direct = "up";
  }
  if (
    ghosts[typeGhost].direct === "left" &&
    ghosts[typeGhost].basePos - 1 === 392
  ) {
    ghosts[typeGhost].direct = "right";
  }
  if (
    ghosts[typeGhost].direct === "right" &&
    (ghosts[typeGhost].basePos + 1 === 323 ||
      ghosts[typeGhost].basePos + 1 === 578)
  ) {
    ghosts[typeGhost].direct = "up";
  }
  if (
    ghosts[typeGhost].direct === "up" &&
    (ghosts[typeGhost].basePos - 28 === 494 ||
      ghosts[typeGhost].basePos - 28 === 401)
  ) {
    ghosts[typeGhost].direct = "left";
  }
  if (
    ghosts[typeGhost].direct === "down" &&
    (ghosts[typeGhost].basePos + 28 === 485 ||
      ghosts[typeGhost].basePos + 28 === 410)
  ) {
    ghosts[typeGhost].direct = "right";
  }
  if (
    ghosts[typeGhost].direct === "right" &&
    ghosts[typeGhost].basePos + 1 === 419
  ) {
    ghosts[typeGhost].direct = "left";
  }
  //turnNow()
  if (direct === "left") {
    // if not wall, != another ghost || equal pacman
    if (
      mapGame[ghosts[typeGhost].basePos - 1] !== 1 &&
      ghosts[typeGhost].basePos - 1 !== 567
    ) {
      ghosts[typeGhost].basePos -= 1;
      ghosts[typeGhost].posX -= 30;
    } else {
      ghosts[typeGhost].direct = directsY[randomNumber];
      // recutsive iCanGo('right', curr)
    }
  }
  if (direct === "right") {
    if (
      mapGame[ghosts[typeGhost].basePos + 1] !== 1 &&
      ghosts[typeGhost].basePos + 1 !== 580
    ) {
      ghosts[typeGhost].basePos += 1;
      ghosts[typeGhost].posX += 30;
    } else {
      ghosts[typeGhost].direct = directsY[randomNumber];
    }
  }
  if (direct === "up") {
    if (
      mapGame[ghosts[typeGhost].basePos - 28] !== 1 &&
      ghosts[typeGhost].basePos - 28 !== 177 &&
      ghosts[typeGhost].basePos - 28 !== 186
    ) {
      ghosts[typeGhost].posY -= 30;
      ghosts[typeGhost].basePos -= 28;
    } else {
      ghosts[typeGhost].direct = directsX[randomNumber];
    }
  }
  if (direct === "down") {
    if (
      mapGame[ghosts[typeGhost].basePos + 28] !== 1 &&
      ghosts[typeGhost].basePos + 28 !== 628 &&
      ghosts[typeGhost].basePos + 28 !== 631
    ) {
      ghosts[typeGhost].posY += 30;
      ghosts[typeGhost].basePos += 28;
    } else {
      ghosts[typeGhost].direct = directsX[randomNumber];
    }
  }
  return [
    ghosts[typeGhost].direct,
    ghosts[typeGhost].basePos,
    ghosts[typeGhost].posX,
    ghosts[typeGhost].posY,
  ];
};
//DRY, SR
const findAndDestroy = (direct, typeGhost, typePerimetr) => {
  let randomNumber = Math.floor(Math.random() * 2);

  // if (typeGhost == "pinkGhost" && ghosts.pinkGhost.baseState) {
  //   ghosts.pinkGhost.direct = "right";
  //   ghosts.pinkGhost.posX = 360;
  //   ghosts.pinkGhost.posY = 420;
  //   ghosts.pinkGhost.basePos = 404;
  //   ghosts.pinkGhost.baseState = false;
  // } else if (typeGhost == "orangeGhost" && ghosts.orangeGhost.baseState) {
  //   ghosts.orangeGhost.direct = "up";
  //   ghosts.orangeGhost.posX = 390;
  //   ghosts.orangeGhost.posY = 420;
  //   ghosts.orangeGhost.basePos = 405;
  //   ghosts.orangeGhost.baseState = false;
  // } else if (typeGhost == "redGhost" && ghosts.redGhost.baseState) {
  //   ghosts.redGhost.direct = "up";
  //   ghosts.redGhost.posX = 420;
  //   ghosts.redGhost.posY = 420;
  //   ghosts.redGhost.basePos = 406;
  //   ghosts.redGhost.baseState = false;
  // }

  ghosts[typeGhost].basePos = Math.floor(
    (ghosts[typeGhost].posY / 30) * 28 + ghosts[typeGhost].posX / 30
  );

  if (typePerimetr == "square") {
    if (
      (!ghosts[typeGhost].goOutBox && ghosts[typeGhost].basePos === 377) ||
      ghosts[typeGhost].basePos === 378
    ) {
      ghosts[typeGhost].direct = "up";
      ghosts[typeGhost].goOutBox = false;
    }
    if (
      ghosts[typeGhost].direct === "left" &&
      (ghosts[typeGhost].basePos - 1 === 146 ||
        ghosts[typeGhost].basePos - 1 === 653)
    ) {
      ghosts[typeGhost].direct = "down";
    }
    if (
      ghosts[typeGhost].direct === "left" &&
      (ghosts[typeGhost].basePos - 1 === 824 ||
        ghosts[typeGhost].basePos - 1 === 650)
    ) {
      ghosts[typeGhost].direct = "up";
    }
    if (
      ghosts[typeGhost].direct === "right" &&
      (ghosts[typeGhost].basePos + 1 === 827 ||
        ghosts[typeGhost].basePos + 1 === 665)
    ) {
      ghosts[typeGhost].direct = "up";
    }
    if (
      ghosts[typeGhost].direct === "right" &&
      (ghosts[typeGhost].basePos + 1 === 161 ||
        ghosts[typeGhost].basePos + 1 === 662)
    ) {
      ghosts[typeGhost].direct = "down";
    }
    if (
      ghosts[typeGhost].direct === "up" &&
      ghosts[typeGhost].basePos - 28 === 161
    ) {
      ghosts[typeGhost].direct = "left";
    }
    if (
      ghosts[typeGhost].direct === "up" &&
      ghosts[typeGhost].basePos - 28 === 146
    ) {
      ghosts[typeGhost].direct = "right";
    }
    if (
      ghosts[typeGhost].direct === "down" &&
      ghosts[typeGhost].basePos + 28 === 665
    ) {
      ghosts[typeGhost].direct = "left";
    }
    if (
      ghosts[typeGhost].direct === "down" &&
      ghosts[typeGhost].basePos + 28 === 650
    ) {
      ghosts[typeGhost].direct = "right";
    }
  }
  if (direct === "left") {
    if (mapGame[ghosts[typeGhost].basePos - 1] !== 1) {
      ghosts[typeGhost].basePos -= 1;
      ghosts[typeGhost].posX -= 30;
    } else {
      ghosts[typeGhost].direct = directsY[randomNumber];
    }
  }
  if (direct === "right") {
    if (mapGame[ghosts[typeGhost].basePos + 1] !== 1) {
      ghosts[typeGhost].basePos += 1;
      ghosts[typeGhost].posX += 30;
    } else {
      ghosts[typeGhost].direct = directsY[randomNumber];
    }
  }
  if (direct === "up") {
    if (mapGame[ghosts[typeGhost].basePos - 28] !== 1) {
      ghosts[typeGhost].posY -= 30;
      ghosts[typeGhost].basePos -= 28;
    } else {
      ghosts[typeGhost].direct = directsX[randomNumber];
    }
  }
  if (direct === "down") {
    if (mapGame[ghosts[typeGhost].basePos + 28] !== 1) {
      ghosts[typeGhost].posY += 30;
      ghosts[typeGhost].basePos += 28;
    } else {
      ghosts[typeGhost].direct = directsX[randomNumber];
    }
  }
  return [
    ghosts[typeGhost].direct,
    ghosts[typeGhost].basePos,
    ghosts[typeGhost].posX,
    ghosts[typeGhost].posY,
  ];
};
//connetc -> receive data - call func - send main thread calcualted data
self.onconnect = (e) => {
  const port = e.ports[0];

  let first = [];
  let second = [];
  let third = [];
  let four = [];

  port.onmessage = function (e) {
    let obj1 = e.data[0];
    let obj2 = e.data[1];
    let obj3 = e.data[2];
    let obj4 = e.data[3];
    //get state - goTOBase, if true -> set def value -> freeze 10sec, -> start boxGhost pos
    // ghosts.cyanGhost.baseState = obj1["base"];
    // ghosts.redGhost.baseState = obj2["base"];
    // ghosts.orangeGhost.baseState = obj3["base"];
    // ghosts.pinkGhost.baseState = obj4["base"];

    //if all true -> return all data

    first = intravenousPerimeter(obj1["dir"], obj1["ghost"]);
    second = findAndDestroy(obj2["dir"], obj2["ghost"], obj2["type"]);
    third = findAndDestroy(obj3["dir"], obj3["ghost"], obj3["type"]);
    four = findAndDestroy(obj4["dir"], obj4["ghost"], obj4["type"]);

    port.postMessage([first, second, third, four]);
  };
};
