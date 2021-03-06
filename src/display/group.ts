/// <reference path="./../reference.d.ts" />

namespace Lightning {
    export class Group extends PIXI.Container {

        public _events:EventEmitter;
        public globalRef:string;

        constructor() {
            super();
            this._events = new EventEmitter;
        }
        
        /**
         * @param  {} ...displayObjects
         */
        add(...displayObjects) {
             for(let i = 0; i < displayObjects.length; i++) {
                this.addChild(displayObjects[i]);
             }
        }

        public update(time: number) {
            
        }
    }
}