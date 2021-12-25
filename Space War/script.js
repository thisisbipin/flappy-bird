import { Bullet } from "./modules/Bullet.js";
import { Enemy } from "./modules/Enemy.js";
import { SpaceShip } from "./modules/SpaceShip.js";
let GLOBALS = {
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
};
let ship = new SpaceShip();
let enemy = new Enemy();
$(() => {
  // set the feild
  $("#battle-ground").width(GLOBALS.windowWidth + "px");
  $("#battle-ground").height(GLOBALS.windowHeight + "px");

  ship.position.maxX = GLOBALS.windowWidth;
  enemy.position.maxX = GLOBALS.windowWidth;
  enemy.move();
  ship.updatePosition();
});

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case " ":
      ship.shoot();
      // Fire
      return;

    case "ArrowUp":
      // Do nothing
      break;

    case "ArrowDown":
      // Do nothing
      break;

    case "ArrowLeft":
    case "a":
      ship.moveLeft();
      break;

    case "ArrowRight":
    case "d":
      ship.moveRight();
      break;

    default:
      console.log(event.key);
      return;
  }
});
