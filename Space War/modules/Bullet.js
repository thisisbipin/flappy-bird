import { wait } from "./Tools.js";
export class Bullet {
  position = { x: 10, y: 10 };
  speed = 50;
  isdestroyed = false;
  width = 0;
  height = 0;
  constructor(x, y, decrementParentShipCount, isEnemySide = false) {
    console.log(x, y);
    this.position.x = x;
    this.decrementParentShipCount = decrementParentShipCount;
    this.position.y = y;
    let bullet = document.createElement("div");
    bullet.className =
      isEnemySide === true ? "element bullet flip" : "element bullet";
    document.body.append(bullet);
    this.bullet = $(bullet);
    this.bullet.css("left", this.position.x + "px");
    this.bullet.css(isEnemySide ? "top" : "bottom", this.position.y + "px");
    this.isEnemySide = isEnemySide;
    console.log("created-bullet");

    this.updatePosition();
  }
  selfDestroy() {
    this.isdestroyed = true;
    this.decrementParentShipCount();
    this.bullet.remove();
  }

  async updatePosition() {
    // everything relative to bottom
    if (this.position.y >= window.innerHeight) {
      this.selfDestroy();
      return;
    }
    this.position.y += this.speed;
    this.bullet.css(
      this.isEnemySide ? "top" : "bottom",
      this.position.y + "px"
    );
    await wait(300);
    this.updatePosition();
  }
}
