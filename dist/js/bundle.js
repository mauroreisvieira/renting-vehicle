/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var Vehicle_1 = __webpack_require__(3);
var FooterComponent_1 = __webpack_require__(4);
var HeaderComponent_1 = __webpack_require__(5);
var MenuComponent_1 = __webpack_require__(6);
var ButtonComponent_1 = __webpack_require__(7);
var TypographyComponent_1 = __webpack_require__(8);
var ColorComponent_1 = __webpack_require__(9);
__webpack_require__(10);
var Main = /** @class */ (function () {
    function Main() {
        this.car = new Vehicle_1.default('red', 10, 5, 'Car');
        this.motorcycle = new Vehicle_1.default('blue', 2, 2, 'Motorcycle');
        this.init();
    }
    Main.prototype.init = function () {
        ReactDOM.render(React.createElement(HeaderComponent_1.HeaderComponent, null), document.getElementById('header'));
        ReactDOM.render(React.createElement(MenuComponent_1.MenuComponent, null), document.getElementById('sidenav'));
        // Typography
        ReactDOM.render(React.createElement(TypographyComponent_1.TypographyComponent, null), document.getElementById('typography'));
        // Button
        ReactDOM.render(React.createElement(ButtonComponent_1.ButtonComponent, null), document.getElementById('button'));
        // Color
        ReactDOM.render(React.createElement(ColorComponent_1.ColorComponent, null), document.getElementById('color'));
        // ReactDOM.render(
        //     <VehicleComponent vehicleType={this.car.vehicleType} color={this.car.color} numWheels={this.car.numWheels} age={this.car.age} />,
        //     document.getElementById('car')
        // );
        // ReactDOM.render(
        //     <VehicleComponent vehicleType={this.motorcycle.vehicleType} color={this.motorcycle.color} numWheels={this.motorcycle.numWheels} age={this.motorcycle.age} />,
        //     document.getElementById('motorcycle')
        // );
        ReactDOM.render(React.createElement(FooterComponent_1.FooterComponent, null), document.getElementById('footer'));
    };
    return Main;
}());
exports.default = Main;
new Main();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = /** @class */ (function () {
    function Vehicle(color, age, numWheels, vehicleType) {
        this.color = color;
        this.age = age;
        this.numWheels = numWheels;
        this.vehicleType = vehicleType;
    }
    return Vehicle;
}());
exports.default = Vehicle;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var FooterComponent = /** @class */ (function (_super) {
    __extends(FooterComponent, _super);
    function FooterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterComponent.prototype.render = function () {
        return (React.createElement("div", { className: 'content' },
            React.createElement("p", null, "Footer")));
    };
    return FooterComponent;
}(React.Component));
exports.FooterComponent = FooterComponent;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var HeaderComponent = /** @class */ (function (_super) {
    __extends(HeaderComponent, _super);
    function HeaderComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderComponent.prototype.render = function () {
        return (React.createElement("div", { className: 'content' },
            React.createElement("p", null, "Header")));
    };
    return HeaderComponent;
}(React.Component));
exports.HeaderComponent = HeaderComponent;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var MenuComponent = /** @class */ (function (_super) {
    __extends(MenuComponent, _super);
    function MenuComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuComponent.prototype.render = function () {
        return (React.createElement("ul", { className: 'menu' },
            React.createElement("li", { className: 'menu__item' },
                React.createElement("a", { href: './index.html', className: 'menu__item__link' }, "Home")),
            React.createElement("li", { className: 'menu__item menu__item--active' },
                React.createElement("a", { href: './test.html', className: 'menu__item__link' }, "Styleguide"))));
    };
    return MenuComponent;
}(React.Component));
exports.MenuComponent = MenuComponent;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ButtonComponent = /** @class */ (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonComponent.prototype.render = function () {
        return (React.createElement("div", { className: 'row' },
            React.createElement("div", { className: 'col-small-12 col-medium-12 col-large-12' },
                React.createElement("h1", { className: 'text-red' }, "Button")),
            React.createElement("div", { className: 'col-small-12 col-medium-12 col-large-12' },
                React.createElement("div", null,
                    React.createElement("button", { className: 'button button--small button--danger' }, "Button Small"),
                    React.createElement("button", { className: 'button button--medium button--success' }, "Button Medium"),
                    React.createElement("button", { className: 'button button--large button--info' }, "Button Large"),
                    React.createElement("button", { className: 'button button--large button--default', disabled: true }, "Button Disabled")))));
    };
    return ButtonComponent;
}(React.Component));
exports.ButtonComponent = ButtonComponent;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var TypographyComponent = /** @class */ (function (_super) {
    __extends(TypographyComponent, _super);
    function TypographyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypographyComponent.prototype.render = function () {
        return (React.createElement("div", { className: 'row' },
            React.createElement("div", { className: 'col-small-12 col-medium-12 col-large-12' },
                React.createElement("h1", { className: 'text-red' }, "Typography")),
            React.createElement("div", { className: 'col-small-12 col-medium-12 col-large-12' },
                React.createElement("h1", null, "Heading 1"),
                React.createElement("h2", null, "Heading 2"),
                React.createElement("h3", null, "Heading 3"),
                React.createElement("h4", null, "Heading 4"),
                React.createElement("h5", null, "Heading 5"),
                React.createElement("h6", null, "Heading 6"))));
    };
    return TypographyComponent;
}(React.Component));
exports.TypographyComponent = TypographyComponent;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ColorComponent = /** @class */ (function (_super) {
    __extends(ColorComponent, _super);
    function ColorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorComponent.prototype.render = function () {
        return (React.createElement("div", { className: 'row' },
            React.createElement("div", { className: 'col-small-12 col-medium-12 col-large-12' },
                React.createElement("h1", { className: 'text-red' }, "Color")),
            React.createElement("div", { className: 'col-small-3 col-medium-3 col-large-3' },
                React.createElement("div", { className: 'box bg-pink' },
                    React.createElement("p", null, "$u-color-pink (Base)"))),
            React.createElement("div", { className: 'col-small-3 col-medium-3 col-large-3' },
                React.createElement("div", { className: 'box bg-red' },
                    React.createElement("p", null, "$u-color-red (Base)"))),
            React.createElement("div", { className: 'col-small-3 col-medium-3 col-large-3' },
                React.createElement("div", { className: 'box bg-blue' },
                    React.createElement("p", null, "$u-color-blue (Base)"))),
            React.createElement("div", { className: 'col-small-3 col-medium-3 col-large-3' },
                React.createElement("div", { className: 'box bg-green' },
                    React.createElement("p", null, "$u-color-green (Base)"))),
            React.createElement("div", { className: 'col-small-3 col-medium-3 col-large-3' },
                React.createElement("div", { className: 'box bg-yellow' },
                    React.createElement("p", null, "$u-color-yellow (Base)"))),
            React.createElement("div", { className: 'col-small-3 col-medium-3 col-large-3' },
                React.createElement("div", { className: 'box bg-orange' },
                    React.createElement("p", null, "$u-color-orange (Base)"))),
            React.createElement("div", { className: 'col-small-3 col-medium-3 col-large-3' },
                React.createElement("div", { className: 'box bg-salmon' },
                    React.createElement("p", null, "$u-color-salmon (Base)"))),
            React.createElement("div", { className: 'col-small-3 col-medium-3 col-large-3' },
                React.createElement("div", { className: 'box bg-violet' },
                    React.createElement("p", null, "$u-color-violet (Base)"))),
            React.createElement("div", { className: 'col-small-3 col-medium-3 col-large-3' },
                React.createElement("div", { className: 'box bg-yellow' },
                    React.createElement("p", null, "$u-color-yellow (Base)"))),
            React.createElement("div", { className: 'col-small-3 col-medium-3 col-large-3' },
                React.createElement("div", { className: 'box bg-orange' },
                    React.createElement("p", null, "$u-color-orange (Base)"))),
            React.createElement("div", { className: 'col-small-3 col-medium-3 col-large-3' },
                React.createElement("div", { className: 'box bg-salmon' },
                    React.createElement("p", null, "$u-color-salmon (Base)"))),
            React.createElement("div", { className: 'col-small-3 col-medium-3 col-large-3' },
                React.createElement("div", { className: 'box bg-violet' },
                    React.createElement("p", null, "$u-color-violet (Base)")))));
    };
    return ColorComponent;
}(React.Component));
exports.ColorComponent = ColorComponent;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map