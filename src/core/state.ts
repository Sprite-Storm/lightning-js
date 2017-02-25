/// <reference path="./../reference.d.ts" />

namespace Lightning {
    export class State extends PIXI.Container {
        
        protected game: Engine;

        constructor(game:Engine, ...params) {
            super();
            this.game = game;
        }

        init(params) {
            
        }

        start() {
            
        }

        update() {
            
        }

        create() {

        }

        add(...params:Array<DisplayObject>) {
            for(let i of params) {
                this.addChild(i);
            }
        }
    }
}