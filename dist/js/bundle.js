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
var SideNavComponent_1 = __webpack_require__(6);
var HelloComponent_1 = __webpack_require__(7);
var VehicleComponent_1 = __webpack_require__(8);
__webpack_require__(9);
var Main = /** @class */ (function () {
    function Main() {
        this.car = new Vehicle_1.default('red', 10, 5, 'Car');
        this.motorcycle = new Vehicle_1.default('blue', 2, 2, 'Motorcycle');
        this.init();
    }
    Main.prototype.init = function () {
        ReactDOM.render(React.createElement(HeaderComponent_1.HeaderComponent, null), document.getElementById('header'));
        ReactDOM.render(React.createElement(SideNavComponent_1.SideNavComponent, null), document.getElementById('sidenav'));
        ReactDOM.render(React.createElement(HelloComponent_1.HelloComponent, { compiler: 'TypeScript', framework: 'React' }), document.getElementById('hello'));
        ReactDOM.render(React.createElement(VehicleComponent_1.VehicleComponent, { vehicleType: this.car.vehicleType, color: this.car.color, numWheels: this.car.numWheels, age: this.car.age }), document.getElementById('car'));
        ReactDOM.render(React.createElement(VehicleComponent_1.VehicleComponent, { vehicleType: this.motorcycle.vehicleType, color: this.motorcycle.color, numWheels: this.motorcycle.numWheels, age: this.motorcycle.age }), document.getElementById('motorcycle'));
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
var SideNavComponent = /** @class */ (function (_super) {
    __extends(SideNavComponent, _super);
    function SideNavComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SideNavComponent.prototype.render = function () {
        return (React.createElement("ul", { className: 'nav' },
            React.createElement("li", { className: 'nav__item' },
                React.createElement("a", { href: './index.html', className: 'nav__item__link' }, "Home")),
            React.createElement("li", { className: 'nav__item nav__item--active' },
                React.createElement("a", { href: './test.html', className: 'nav__item__link' }, "Test"))));
    };
    return SideNavComponent;
}(React.Component));
exports.SideNavComponent = SideNavComponent;


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
var HelloComponent = /** @class */ (function (_super) {
    __extends(HelloComponent, _super);
    function HelloComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloComponent.prototype.render = function () {
        return React.createElement("h3", null,
            "Hello from ",
            this.props.compiler,
            " and ",
            this.props.framework,
            "!");
    };
    return HelloComponent;
}(React.Component));
exports.HelloComponent = HelloComponent;


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
var VehicleComponent = /** @class */ (function (_super) {
    __extends(VehicleComponent, _super);
    function VehicleComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehicleComponent.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("h4", null,
                "VehicleType: ",
                this.props.vehicleType),
            React.createElement("div", null,
                "Color: ",
                this.props.color),
            React.createElement("div", null,
                "Wheels: ",
                this.props.numWheels),
            React.createElement("div", null,
                "Age: ",
                this.props.age));
    };
    return VehicleComponent;
}(React.Component));
exports.VehicleComponent = VehicleComponent;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map