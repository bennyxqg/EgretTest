module UIDemo {
    export class TestScroller extends egret.gui.Group {
        public constructor() {
            super();
        }

        public createChildren() {
            super.createChildren();

            var myScroller = new egret.gui.Scroller();

            myScroller.x = 40;
            myScroller.y = 40;
            myScroller.width = 400;
            myScroller.height = 300;

            var group: egret.gui.Group = new egret.gui.Group();
            var bmpAssert: egret.gui.UIAsset = new egret.gui.UIAsset("bgImage")
            group.addElement(bmpAssert);

            myScroller.viewport = group;
            this.addElement(myScroller);
        }
    }
} 