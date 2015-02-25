class GUITest extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event): void {
        //注入自定义的素材解析器
        egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        egret.gui.Theme.load("resource/theme.thm");
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadGroup("preload");
    }
    /**
     * preload资源组加载完成
     */
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            this.createScene();
        }
    }
    private gameLayer: egret.DisplayObjectContainer;

    private guiLayer: egret.gui.UIStage;
    /**
     * 创建场景界面
     */
    private createScene(): void {

        //游戏场景层，游戏场景相关内容可以放在这里面。
        this.gameLayer = new egret.DisplayObjectContainer();
        this.addChild(this.gameLayer);
        var bitmap: egret.Bitmap = new egret.Bitmap();
        bitmap.texture = RES.getRes("bgImage");
        this.gameLayer.addChild(bitmap);

        //GUI的组件必须都在这个容器内部,UIStage会始终自动保持跟舞台一样大小。
        this.guiLayer = new egret.gui.UIStage();
        this.addChild(this.guiLayer);

        //this.TestInputLabel();

        //var test = new UIDemo.TestLabel();
        //var test = new UIDemo.TestButton();
        //var test = new UIDemo.TestToggleButton();
        //var test = new UIDemo.TestCheckBox();
        //var test = new UIDemo.TestRadioButton();
        //var test = new UIDemo.TestSlider();
        //var test = new UIDemo.TestProgress();
        //var test = new UIDemo.TestAlert();
        //var test = new UIDemo.TestGroup();
        //var test = new UIDemo.TestPanel();
        //var test = new UIDemo.TestScroller();
        var test = new UIDemo.TestDataGroup();

        this.guiLayer.addElement(test)
    }
    // test InputLabel
    private TestInputLabel() {
        var inputLabel1 = new egret.gui.EditableText();
        inputLabel1.width = this.guiLayer.width / 2;
        inputLabel1.touchEnabled = true;
        inputLabel1.enabled = true;
        inputLabel1.maxChars = 35;
        inputLabel1.size = 40;
        inputLabel1.addEventListener("contentWidth", this.InputLabel_contentWidth, this);
        inputLabel1.addEventListener("contentHeight", this.InputLabel_contentHeight, this);
    }
    private InputLabel_contentWidth(event: egret.Event) {
        console.log("InputLabel event, contentWidth");
    }
    private InputLabel_contentHeight() {
    }

}
