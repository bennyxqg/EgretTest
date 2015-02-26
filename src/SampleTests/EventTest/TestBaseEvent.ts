/**
 * Author by daz2yy
 * Create at 2015-2-26
 */
module EventTestDemo {
    export class TestBaseEvent extends egret.DisplayObjectContainer {
        public constructor() {
            super();
            this.testEvent();
        }
        private testEvent() {
            var boy = new Boy();
            var girl = new Girl();

            boy.name = "boy";
            boy.addEventListener(DateEvent.DATE, girl.getDate, girl);
            boy.order();
            boy.removeEventListener(DateEvent.DATE, girl.getDate, girl);
        }
    }

    class Boy extends egret.Sprite {
        public constructor() {
            super();
        }

        public order() {
            //generate date event
            var dateEvent: DateEvent = new DateEvent(DateEvent.DATE);
            dateEvent._year = 2015;
            dateEvent._month = 2;
            dateEvent._day = 26;
            dateEvent._where = "稻香";
            dateEvent._todo = "喝早茶";

            this.dispatchEvent(dateEvent);
        }
    }

    class Girl extends egret.Sprite {
        public constructor() {
            super();
        }

        public getDate(event: DateEvent) {
            console.log("获得 " + event.target.name + " 的邀请");
            console.log("会在 " + " " + event._where + " " + event._todo);
        }
    }

    class DateEvent extends egret.Event {
        public static DATE: string = "约会";
        public _year: number = 0;
        public _month: number = 0;
        public _day: number = 0;
        public _where: string = "";
        public _todo: string = "";

        public constructor(eventType: string, bubbles: boolean = false, cancelable: boolean = false) {
            super(eventType, bubbles, cancelable);
        }
    }
} 