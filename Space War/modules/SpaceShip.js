import { Bullet } from "./Bullet.js";
export class SpaceShip {
  position = { x: 10, y: 10, maxX: 0, maxY: 0 };

  speed = 10;
  bulletcount = 0;
  width = 0;
  height = 0;
  constructor() {
    let ship = document.createElement("div");
    ship.className = "element ship";
    document.getElementById("battle-ground").append(ship);
    this.ship = $(ship);
    this.width = this.ship.width();
    this.height = this.ship.height();

    console.log("created-ship");
  }
  moveLeft() {
    this.position.x += -2 * this.speed;
    this.updatePosition();
  }

  moveRight() {
    this.position.x += 2 * this.speed;
    this.updatePosition();
  }
  updatePosition() {
    if (this.position.x > this.position.maxX - this.width) {
      this.position.x = this.position.maxX - this.width;
      return;
    } else if (this.position.x < 0) this.position.x = 0;
    this.ship.css("left", this.position.x + "px");
  }
  shoot() {
    if (this.bulletcount > 20) {
      console.log("Cannot fire more bullets! already at the limit");
      return;
    }
    this.bulletcount++;
    console.log("Shooted");
    let bulletFirePoint = {
      x: this.position.x + this.width / 4 + 4,
      y: this.position.y + this.height / 2,
    };
    let bullet = new Bullet(
      bulletFirePoint.x,
      bulletFirePoint.y,
      () => this.bulletcount--
    );

    // bullet will get automatically deleted after its work
  }
}
