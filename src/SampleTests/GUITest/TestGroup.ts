/**
 * Author by daz2yy
 * Create at 2015-2-26
 */
module UIDemo {
    export class TestGroup extends egret.gui.Group {
        public constructor() {
            super();
        }

        private _myGroup: egret.gui.Group;
        public createChildren() {
            super.createChildren();

            this._myGroup = new egret.gui.Group();
            this.addElement(this._myGroup);

            // test Button

            var layoutName: any = ["BaseLayout", "HorizontalLayout", "VerticalLayout", "TileLayout"];
            for (var i: number = 0; i < 4; ++i) {
                var btn: egret.gui.Button = new egret.gui.Button();
                btn.label = layoutName[i];
                btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.TestButton_Click, this);
                this._myGroup.addElement(btn);
            }
            this.doBaseLayout();
        }

        private doBaseLayout() {
            for (var i: number = 0; i < 4; ++i) {
                var btn = <egret.gui.Button>this._myGroup.getElementAt(i);
                btn.x = i * 50;
                btn.y = i * 100;
            }
        }

        private TestButton_Click(event: egret.Event) {
            for (var i: number = 0; i < 4; ++i) {
                if (event.target.label == "BaseLayout") {
                    this._myGroup.layout = new egret.gui.BasicLayout();
                    this.doBaseLayout();
                } else if (event.target.label == "HorizontalLayout") {
                    this._myGroup.layout = new egret.gui.HorizontalLayout();
                } else if (event.target.label == "VerticalLayout") {
                    this._myGroup.layout = new egret.gui.VerticalLayout();
                } else {
                    var tileLayout = new egret.gui.TileLayout();
                    tileLayout.requestedColumnCount = 2;
                    this._myGroup.layout = tileLayout;
                }
            }
        }
    }
} 