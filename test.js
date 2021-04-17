Main thread - can access data -> postMessage, sended side - not access data
MT -> key - value -> l/r/u/d -> bg - worker - ghost algo & pacman - calculate data -> 
MT - > render position ghosts & pacman, 
send BT -> flags -> pacman killed, etc data 


class component 
wned object refernce worker
pacman - worker, ghost worker, inside check interesct, & coin -> retur nresuklt main thread
coin - killGhost active
if (keys.ArrowRight) {
  if (mapGame[player.indexMap + 1] !== 1) {
    if (!player.canKill) {
      if (
        player.indexMap === ghosts.redGhost.basePos ||
        player.indexMap === ghosts.cyanGhost.basePos ||
        player.indexMap === ghosts.pinkGhost.basePos ||
        player.indexMap === ghosts.orangeGhost.basePos ||
        player.indexMap + 1 === ghosts.cyanGhost.basePos ||
        player.indexMap + 1 === ghosts.redGhost.basePos ||
        player.indexMap + 1 === ghosts.orangeGhost.basePos ||
        player.indexMap + 1 === ghosts.pinkGhost.basePos
      ) {
        player.life--;
        player.posX = 425;
        player.posY = 695;
        player.indexMap = 658;
      }
    }
    player.indexMap += 1;
    player.posX += 30;
    player.transX = "translateX(100%)";
  }
}