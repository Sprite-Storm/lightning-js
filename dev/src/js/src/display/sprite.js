/// <reference path="./../reference.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lightning;
(function (Lightning) {
    var Sprite = (function (_super) {
        __extends(Sprite, _super);
        /**
         * @param  {PIXI.Texture=null} texture
         */
        function Sprite(texture) {
            if (texture === void 0) { texture = null; }
            var _this = _super.call(this, texture) || this;
            _this._events = new Lightning.EventEmitter();
            return _this;
        }
        Sprite.prototype.enableInput = function () {
            this.interactive = true;
            this._input = new Lightning.Input(this);
        };
        /**
         * @param  {boolean} val
         */
        Sprite.prototype.enableBody = function (val) {
            if (val) {
            }
        };
        /**
         * @param  {number} aX
         * @param  {number=aX} aY
         * @returns void
         */
        Sprite.prototype.setAnchor = function (aX, aY) {
            if (aY === void 0) { aY = aX; }
            this.anchor = new PIXI.Point(aX, aY);
        };
        /**
         * @param  {number} aX
         * @param  {number=aX} aY
         * @returns void
         */
        Sprite.prototype.setScale = function (aX, aY) {
            if (aY === void 0) { aY = aX; }
            this.scale.x = aX;
            this.scale.y = aY;
        };
        Object.defineProperty(Sprite.prototype, "body", {
            /**
             * @returns Box2D
             */
            get: function () {
                return this._body;
            },
            /**
             * @param  {Box2D.Dynamics.b2Body} body
             */
            set: function (body) {
                this._body = body;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param  {} ...displayObjects
         */
        Sprite.prototype.add = function () {
            var displayObjects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                displayObjects[_i] = arguments[_i];
            }
            for (var i = 0; i < displayObjects.length - 1; i++) {
                this.addChild(displayObjects[i]);
            }
        };
        Sprite.prototype.enableDrag = function (respectPosition) {
            var _this = this;
            if (respectPosition === void 0) { respectPosition = false; }
            this._respectPosition = respectPosition;
            // check to see if interaction is already enabled
            if (this.interactive === false) {
                this.interactive = true;
            }
            this.on('mousedown', function (e) {
                _this.startDrag(e);
            });
            this.on('touchstart', function (e) {
                _this.startDrag(e);
            });
            this.on('mouseup', function (e) {
                _this.stopDrag(e);
            });
            this.on('touchend', function (e) {
                _this.stopDrag(e);
            });
            /**
             * need to think about handling pointer events
             */
        };
        Sprite.prototype.startDrag = function (event) {
            if (this._respectPosition) {
                var rpx = event.data.global.x * window.devicePixelRatio - this.position.x;
                var rpy = event.data.global.y * window.devicePixelRatio - this.position.y;
                this._respectPositionValues = { x: rpx, y: rpy };
            }
            else {
                this._respectPositionValues = { x: 0, y: 0 };
            }
            this.on('mousemove', this.onDrag);
            this.on('touchmove', this.onDrag);
        };
        Sprite.prototype.stopDrag = function (event) {
            this.removeListener('mousemove', this.onDrag);
            this.removeListener('touchmove', this.onDrag);
        };
        Sprite.prototype.onDrag = function (event) {
            this.position = new PIXI.Point((event.data.global.x * window.devicePixelRatio) - this._respectPositionValues.x, (event.data.global.y * window.devicePixelRatio) - this._respectPositionValues.y);
        };
        Object.defineProperty(Sprite.prototype, "input", {
            get: function () {
                return this._input;
            },
            enumerable: true,
            configurable: true
        });
        return Sprite;
    }(PIXI.Sprite));
    Lightning.Sprite = Sprite;
})(Lightning || (Lightning = {}));
