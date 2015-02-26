/**
 * Author by daz2yy
 * Create at 2015-2-26
 */
module UIDemo {
    export class TestRadioButton extends egret.gui.Group {
        public constructor() {
            super();
        }

        public createChildren() {
            super.createChildren();

            // one radioBtn
            var radioBtn: egret.gui.RadioButton = new egret.gui.RadioButton();
            radioBtn.label = "I'm a Radio Button";
            radioBtn.value = 1;    //additional data, can use when click it;
            this.addElement(radioBtn);
            radioBtn.verticalCenter = 0;

            // radioBtns
            var radioBtn1: egret.gui.RadioButton = new egret.gui.RadioButton();
            radioBtn1.label = "I'm a Radio Button1";
            radioBtn1.value = "Button1";
            radioBtn1.groupName = "G1";
            radioBtn1.addEventListener(egret.Event.CHANGE, this.TestRadioButton_Click, this);
            this.addElement(radioBtn1);
            radioBtn1.horizontalCenter = 100;
            radioBtn1.verticalCenter = 0;

            var radioBtn2: egret.gui.RadioButton = new egret.gui.RadioButton();
            radioBtn2.label = "I'm a Radio Button2";
            radioBtn2.value = "Button2";
            radioBtn2.groupName = "G1";
            radioBtn2.addEventListener(egret.Event.CHANGE, this.TestRadioButton_Click, this);
            this.addElement(radioBtn2);
            radioBtn2.horizontalCenter = 100;
            radioBtn2.verticalCenter = 30;

            // Test radio Group
            var radioBtnGroup: egret.gui.RadioButtonGroup = new egret.gui.RadioButtonGroup();
            radioBtnGroup.addEventListener(egret.Event.CHANGE, this.TestRadioButton_groupChangeHandler, this);

            var radioBtn3: egret.gui.RadioButton = new egret.gui.RadioButton();
            radioBtn3.label = "I'm a Radio Button1";
            radioBtn3.value = "Button1";
            radioBtn3.group = radioBtnGroup;
            this.addElement(radioBtn3);
            radioBtn3.verticalCenter = 50;

            var radioBtn4: egret.gui.RadioButton = new egret.gui.RadioButton();
            radioBtn4.label = "I'm a Radio Button2";
            radioBtn4.value = "Button2";
            radioBtn4.group = radioBtnGroup;
            this.addElement(radioBtn4);
            radioBtn4.verticalCenter = 80;
        }
        private TestRadioButton_Click(event: egret.Event) {
            console.log(event.target.value);
        }
        private TestRadioButton_groupChangeHandler(event: egret.Event) {
            var radioGroup: egret.gui.RadioButtonGroup = event.target;
            console.log(radioGroup.selectedValue);
        }
    }
} 