/**
 * Author by daz2yy
 * Create at 2015-2-26
 */
module UIDemo {
    export class TestPanel extends egret.gui.Group {
        public constructor() {
            super();
        }

        public createChildren() {
            super.createChildren();

            var myPanel = new egret.gui.Panel();
            myPanel.skinName = "skins.simple.PanelSkin";     // different with group: can set skin
            //myPanel.skinName = "PanelSkin";
            myPanel.title = "MyPanel";
            myPanel.x = 40;
            myPanel.y = 40;
            myPanel.width = 400;
            myPanel.height = 300;
            this.addElement(myPanel);
            myPanel.validateNow();

            //inner var
            var btn: egret.gui.Button = new egret.gui.Button();
            btn.label = "Button";
            btn.horizontalCenter = 0;
            btn.verticalCenter = 0;
            myPanel.addElement(btn);
        }
    }
} 