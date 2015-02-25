module UIDemo {
    export class TestToggleButton extends egret.gui.Group {
        public constructor() {
            super();
        }

        private toggleBtns: egret.gui.ToggleButton[];
        public createChildren() {
            super.createChildren();

            this.toggleBtns = [];
            for (var i: number = 0; i < 4; ++i) {
                var toggleBtn1: egret.gui.ToggleButton = new egret.gui.ToggleButton();
                toggleBtn1.label = i + 1 + "";
                toggleBtn1.verticalCenter = 0;
                toggleBtn1.width = 80;
                toggleBtn1.x = 20 + i * toggleBtn1.width;
                toggleBtn1.addEventListener(egret.Event.CHANGE, this.TestToggleButton_click, this);
                this.toggleBtns.push(toggleBtn1);
                this.addElement(toggleBtn1);
            }

        }
        private TestToggleButton_click(event: egret.Event) {
            for (var i: number = 0; i < 4; ++i) {
                var btn: egret.gui.ToggleButton = this.toggleBtns[i];
                btn.selected = (btn == event.target);
            }
        }
    }
} 