import { Bullet } from "./Bullet.js";
import { wait } from "./Tools.js";
export class Enemy {
  position = { x: 30, y: 10, maxX: 0, maxY: 0 };
  speed = 10;
  bulletcount = 0;
  width = 0;
  height = 0;
  constructor() {
    let enemyship = document.createElement("div");
    enemyship.className = "element enemy flip";
    document.getElementById("battle-ground").append(enemyship);
    this.enemyship = $(enemyship);
    enemyship.textContent = ".";
    this.width = this.enemyship.width();
    this.height = this.enemyship.height();

    console.log("created-enemy-ship");
    this.updatePosition();
  }
  async move() {
    this.position.x += 2 * this.speed;
    this.updatePosition();
    await wait(400);
    this.move();
    // this.shoot();
  }
  updatePosition() {
    if (this.position.x > this.position.maxX - this.width)
      this.speed = -Math.abs(this.speed);
    else if (this.position.x < 0) this.speed = Math.abs(this.speed);

    this.enemyship.css("left", this.position.x + "px");
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
      () => this.bulletcount--,
      true
    );

    // bullet will get automatically deleted after its work
  }
}
