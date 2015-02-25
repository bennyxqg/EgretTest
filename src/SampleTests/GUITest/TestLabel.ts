module UIDemo{
    export class TestLabel extends egret.gui.Group {
        public constructor() {
            super();
        }


        public createChildren(): void {
            super.createChildren();

            //my object
            var label1: egret.gui.Label = new egret.gui.Label();
            label1.text = "this is a label";
            label1.fontFamily = "Tahoma";
            label1.textColor = 0xFFFFFF;
            label1.size = 40;
            label1.bold = true;
            label1.italic = true;
            label1.textAlign = "left";
            label1.verticalAlign = "top";
            label1.lineSpacing = 10;
            this.addElement(label1);

            var label2: egret.gui.Label = new egret.gui.Label();
            label2.text = "this is a label";
            label2.fontFamily = "Tahoma";
            label2.textColor = 0xFFFFFF;
            label2.size = 40;
            label2.bold = true;
            label2.italic = true;
            label2.textAlign = "right";
            label2.verticalAlign = "top";
            label2.lineSpacing = 10;
            label2.width = 500;
            //   label2.height = 80;
            label2.text = "Test multi line Test multi line Test multi line Test multi line Test multi line Test multi line ";
            label2.maxDisplayedLines = 2;
            label2.padding = 30;
            label2.paddingLeft = 20;
            //label2.paddingRight = 30;
            //label2.paddingTop = 30;
            //label2.paddingBottom = 30;
            this.addElement(label2);
        }
    }
}