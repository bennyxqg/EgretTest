/**
 * Author by daz2yy
 * Create at 2015-2-26
 */
module UIDemo {
    export class TestProgress extends egret.gui.Group {
        public constructor() {
            super();
        }

        private hProgress: egret.gui.ProgressBar;
        private vProgress: egret.gui.ProgressBar;
        public createChildren() {
            super.createChildren();

            this.hProgress = new egret.gui.ProgressBar();
            //this.hProgress.hostComponentKey = "HProgressBar";
            this.hProgress.skinName = "ProgressBarSkin";
            this.hProgress.width = 200;
            this.hProgress.height = 40;
            this.hProgress.verticalCenter = 0;
            this.hProgress.value = 0; // range is : 0 ~ 100;
            this.hProgress.labelFunction = this.barLabelFunction;
            this.addElement(this.hProgress);

            this.vProgress = new egret.gui.ProgressBar();
            this.vProgress.direction = "bottomToTop";
            //this.vProgress.hostComponentKey = "VProgressBar";
            this.vProgress.skinName = "ProgressBarSkin";
            //this.vProgress.width = 40;
            this.vProgress.height = 200;
            this.vProgress.verticalCenter = 0;
            this.vProgress.horizontalCenter = 100;
            this.vProgress.value = 0; // range is : 0 ~ 100;
            this.addElement(this.vProgress);

            //use timer:
            var timer: egret.Timer = new egret.Timer(100, 100);
            timer.addEventListener(egret.TimerEvent.TIMER, this.TestProgress_Timer, this);
            timer.start();
        }
        private TestProgress_Timer(event: egret.Event) {
            this.hProgress.value += 1;
            this.vProgress.value += 1;
        }
        private barLabelFunction(value: number, maximum: number): string {
            return "Loading ... " + Math.ceil(value / maximum * 100) + "%";
        }

    }
} 