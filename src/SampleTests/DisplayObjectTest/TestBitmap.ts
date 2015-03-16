/**
 * Author by daz2yy
 * Create at 2015-3-16
 */

module DisplayObjectDemo {
    export class TestBitmap extends egret.DisplayObjectContainer {
        public constructor() {
            super();
            this.testBitmap();
        }

        private testBitmap() {
            var img:egret.Bitmap = new egret.Bitmap();
            img.texture = RES.getRes("progressbar_fill_png");
            this.addChild(img);
        }
    }
}