module UIDemo {
    export class TestSlider extends egret.gui.Group {
        public constructor() {
            super();
        }

        public createChildren() {
            super.createChildren();

            var hSlider: egret.gui.HSlider = new egret.gui.HSlider();
            hSlider.width = 200;
            hSlider.verticalCenter = 0;
            hSlider.minimum = 0; // setUp the minimum
            hSlider.maximum = 100; // set up the maximum
            hSlider.value = 20; // set up the default value
            hSlider.addEventListener(egret.Event.CHANGE, this.TestSlider_ValueChange, this);
            this.addElement(hSlider);

            var vSlider: egret.gui.VSlider = new egret.gui.VSlider();
            vSlider.height = 200;
            vSlider.verticalCenter = 0;
            vSlider.horizontalCenter = 100;
            vSlider.minimum = 0; // setUp the minimum
            vSlider.maximum = 100; // set up the maximum
            vSlider.value = 20; // set up the default value
            vSlider.liveDragging = false; // Dispatch event when release touch only
            vSlider.addEventListener(egret.Event.CHANGE, this.TestSlider_ValueChange, this);
            this.addElement(vSlider);
        }
        private TestSlider_ValueChange(event: egret.Event) {
            console.log(event.target.value);
        }
    }
} 