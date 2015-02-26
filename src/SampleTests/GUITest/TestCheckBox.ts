/**
 * Author by daz2yy
 * Create at 2015-2-26
 */
module UIDemo {
    export class TestCheckBox extends egret.gui.Group {
        public constructor() {
            super();
        }

        public createChildren() {
            super.createChildren();

            var checkBox1: egret.gui.CheckBox = new egret.gui.CheckBox();
            checkBox1.label = "Choose Me 1";
            checkBox1.addEventListener(egret.Event.CHANGE, this.TestCheckBox_Click, this);
            this.addElement(checkBox1);
            checkBox1.verticalCenter = 0;
        }
        private TestCheckBox_Click(event: egret.Event) {
            console.log(event.target.selected);
        }
    }
} 