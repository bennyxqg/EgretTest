module UIDemo {
    /*
        1.您自定义的ItemRenderer，应该继承egret.gui.ItemRenderer，然后在内部添加您自定义的功能
        2.将数据对应到显示的语句，应该放在dataChanged方法中，当数据改变并且皮肤已经创建完毕的情况下这个方法会被执行。
        这样的好处是，保证您调用的皮肤部件一定是实例化完成的。如果同样的逻辑，您放在data的setter中实现，就可能会遇到部件是null的情况，
        因为皮肤部件可能还未实例化完毕。
    */
    export class LabelRenderer extends egret.gui.ItemRenderer {
        public constructor() {
            super();
            this.touchChildren = true;
        }
        public dataChanged(): void {
            this.labelDisplay.text = this.data.label;
        }
    }

    export class TestDataGroup extends egret.gui.Group {
        public constructor() {
            super();
        }

        public createChildren() {
            super.createChildren();

            //create array
            var sourceArray = [];
            for (var i: number = 0; i < 5; ++i) {
                sourceArray.push({ label: "item" + i });
            }
            // packagae in ArrayCollection.
            // ArrayCollection can dispatch event when data source change (add, sub and so on)
            var myCollection: egret.gui.ArrayCollection = new egret.gui.ArrayCollection(sourceArray);

            // create DataGroup
            var dataGroup: egret.gui.DataGroup = new egret.gui.DataGroup();
            dataGroup.dataProvider = myCollection;
            dataGroup.percentWidth = 100;
            dataGroup.percentHeight = 100;
            this.addElement(dataGroup);

            //注意需要使用ClassFactory做封装，GUI将用工厂模式来生成ItemRenderer的实例
            dataGroup.itemRenderer = new egret.gui.ClassFactory(UIDemo.LabelRenderer);
            dataGroup.itemRendererSkinName = "LabelRendererSkin";

            //layout
            var vLayout: egret.gui.VerticalLayout = new egret.gui.VerticalLayout();
            vLayout.horizontalAlign = egret.HorizontalAlign.CONTENT_JUSTIFY;
            vLayout.gap = 5;
            dataGroup.layout = vLayout;
        }
    }
} 
