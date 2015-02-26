/**
 * Author by daz2yy
 * Create at 2015-2-26
 */
module UIDemo {
    export class TestAlert extends egret.gui.Group {
        public constructor() {
            super();
        }

        public createChildren() {
            super.createChildren();

            egret.gui.Alert.show("You hadn't login yet!", "warning", this.TestAlert_close);

            egret.gui.Alert.show("You hadn't login yet, login now?", "warning", this.TestAlert_confirm, "OK", "Cancel");
        }
        private TestAlert_close(event: egret.Event) {
            console.log("close alert.");
        }
        private TestAlert_confirm(event: egret.gui.CloseEvent) {
            if (event.detail == egret.gui.Alert.FIRST_BUTTON) {
                console.log("click ok.");
            } else {
                console.log("click cancel.");
            }
        }
    }
} 