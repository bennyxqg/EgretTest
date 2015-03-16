/**
 * Author by daz2yy
 * Create at 2015-2-26
 */
module DisplayObjectDemo {
    export class TestSprite extends egret.Sprite {
        public constructor() {
            super();
            this.drawGrid();
        }

        private drawGrid() {
            this.graphics.beginFill(0x0000ff);
            this.graphics.drawRect(0, 0, 50, 50);
            this.graphics.drawRect(50, 50, 50, 50);
            this.graphics.beginFill(0xff0000);
            this.graphics.drawRect(0, 50, 50, 50);
            this.graphics.drawRect(50, 0, 50, 50);
            this.graphics.endFill();    // forget to write endFill() will not caught error.
        }
    }
}