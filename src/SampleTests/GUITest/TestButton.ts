/**
 * Author by daz2yy
 * Create at 2015-2-26
 */
module UIDemo {
    export class TestButton extends egret.gui.Group {
        public constructor() {
            super();
        }

        public createChildren() {
            super.createChildren();

            // test Button
            var button1 = new egret.gui.Button();
            button1.label = "I'm a button1";
            button1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.TestButton_touchTap, this);
            button1.horizontalCenter = 0;
            button1.verticalCenter = -100;
            this.addElement(button1);

            var button2 = new egret.gui.Button();
            button2.label = "I'm a button2";
            button2.width = 200;
            button2.height = 50;
            button2.touchEnabled = false;
            button2.horizontalCenter = 0;
            button2.verticalCenter = 0;
            this.addElement(button2);

            var button2 = new egret.gui.Button();
            button2.label = "I'm a button3";
            button2.enabled = false;
            button2.horizontalCenter = 0;
            button2.verticalCenter = 100;
            this.addElement(button2);
        }
        private TestButton_touchTap(event: egret.Event) {
            console.log("button1 click");
        }
    }
} 