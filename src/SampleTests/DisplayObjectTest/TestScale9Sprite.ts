/**
 * Author by daz2yy
 * Create at 2015-3-16
 */

module DisplayObjectDemo {
    export class TestScale9Sprite extends egret.DisplayObjectContainer {
        public constructor() {
            super();
            this.testScale9Sprite();
        }

        private testScale9Sprite() {
            var img: egret.Bitmap = new egret.Bitmap();
            img.texture = RES.getRes("checkbox_select_normal_png");
            img.width *= 5;
            this.addChild(img);

            var img2: egret.Bitmap = new egret.Bitmap();
            img2.texture = RES.getRes("checkbox_select_normal_png");
            var rect: egret.Rectangle = new egret.Rectangle(10, 10, 10, 10);
            img2.scale9Grid = rect;
            img2.width *= 5;
            img2.y = 150;
            this.addChild(img2);

        }
    }
} 