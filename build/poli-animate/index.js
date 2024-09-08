/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!***********************************************************************************!*\
  !*** ../../../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "../../../../../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "../../../../../../node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!********************************************************************************!*\
  !*** ../../../../../../node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toPrimitive; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "../../../../../../node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "../../../../../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!**********************************************************************************!*\
  !*** ../../../../../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toPropertyKey; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "../../../../../../node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "../../../../../../node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "../../../../../../node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***************************************************************************!*\
  !*** ../../../../../../node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/poli-animate/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
(function (global) {
  var PoliAnimate = function PoliAnimate(options) {
    this.init(options);
  };
  PoliAnimate.prototype.init = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // Define default configurations
    var defaultConfig = {
      // Context (ctx) properties for the canvas rendering context.
      ctx: {
        fillStyle: "#fff",
        // Default color used to fill the dots.
        lineWidth: 1 // Default line width for drawing connections between dots.
      },
      // Configuration related to the dots in the animation.
      dots: {
        r: 0,
        // Default color used to fill the dots.
        g: 255,
        // Default color used to fill the dots.
        b: 0,
        // Default color used to fill the dots.
        distance: 100,
        // Max distance between dots for drawing a line between them.
        d_radius: 200,
        // Distance from the mouse cursor within which dots will react (increase size or change opacity).
        nb: 100,
        // Default number of dots to be drawn on the canvas.
        radius: 4,
        // Default radius of dots.
        maxRadius: 8,
        // Maximum radius of dots when close to the mouse cursor.
        minRadius: 1,
        // Minimum radius of dots when far from the mouse cursor.
        maxOpacity: 1,
        // Maximum opacity of dots when close to the mouse cursor.
        minOpacity: 1 // Minimum opacity of dots when far from the mouse cursor. Note: With both max and min opacity set to 1, dots will not fade based on distance.
      },
      // Gradient color stops for drawing lines between dots.
      colorStops: [{
        stop: 0,
        // Gradient stop position, at the start of the gradient.
        color: "#fff" // Color of the gradient stop.
      }],
      minWidth: 720,
      // Minimum canvas width to enable the animation, useful for disabling on smaller devices.
      containerSelector: '.is-style-poli-animate' // CSS selector for the container element(s) where the animation will be applied.
    };

    // Apply user options over the default configurations
    // For top-level properties
    var config = _objectSpread(_objectSpread({}, defaultConfig), options);

    // For nested properties, manually ensure they're correctly merged
    // config.ctx  = {...defaultConfig.ctx, ...options.ctx};
    // config.dots = {...defaultConfig.dots, ...options.dots};
    // Assuming colorStops should be replaced entirely by user options if provided
    if (options.colorStops) {
      config.colorStops = options.colorStops;
    }
    if (window.innerWidth <= config.minWidth) return;
    var containers = document.querySelectorAll(config.containerSelector);
    if (!containers.length) return;
    containers.forEach(function (container) {
      var canvas = document.createElement('canvas');
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      container.appendChild(canvas);
      var ctx = canvas.getContext('2d');
      Object.assign(ctx, config.ctx);
      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      config.colorStops.forEach(function (colorStop) {
        gradient.addColorStop(colorStop.stop, colorStop.color);
      });
      ctx.strokeStyle = gradient;
      var mousePosition = {
        x: canvas.width / 2,
        y: canvas.height / 2
      };
      var dots = Array.from({
        length: config.dots.nb
      }, function () {
        return new Dot(canvas, config.dots.radius);
      });
      function Dot(canvas, radius) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = -.5 + Math.random();
        this.vy = -.5 + Math.random();
        this.radius = radius;
      }
      Dot.prototype.draw = function (mousePosition, config) {
        var distanceToMouse = Math.sqrt(Math.pow(this.x - mousePosition.x, 2) + Math.pow(this.y - mousePosition.y, 2));

        // Dynamically adjust the dot's opacity based on its distance to the mouse
        var opacityRange = config.dots.maxOpacity - config.dots.minOpacity;
        var dynamicOpacity = config.dots.minOpacity + opacityRange * (1 - distanceToMouse / config.dots.d_radius);
        dynamicOpacity = Math.max(config.dots.minOpacity, Math.min(config.dots.maxOpacity, dynamicOpacity)); // Ensure opacity is within the specified range

        // Dynamically adjust the dot's radius like before
        var radiusRange = config.dots.maxRadius - config.dots.minRadius;
        var dynamicRadius = config.dots.minRadius + radiusRange * (1 - distanceToMouse / config.dots.d_radius);
        dynamicRadius = Math.max(config.dots.minRadius, Math.min(config.dots.maxRadius, dynamicRadius)); // Ensure radius is within the specified range

        ctx.fillStyle = "rgba(".concat(config.dots.r, ", ").concat(config.dots.g, ", ").concat(config.dots.b, ", ").concat(dynamicOpacity, ")"); // Adjust the color as needed
        ctx.beginPath();
        ctx.arc(this.x, this.y, dynamicRadius, 0, Math.PI * 2, false);
        ctx.fill();
      };
      var animate = function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dots.forEach(function (dot) {
          dot.x += dot.vx;
          dot.y += dot.vy;
          if (dot.y < 0 || dot.y > canvas.height) dot.vy = -dot.vy;
          if (dot.x < 0 || dot.x > canvas.width) dot.vx = -dot.vx;
          dot.draw(mousePosition, config);
        });
        drawLines(dots, ctx, mousePosition, config);
        requestAnimationFrame(animate);
      };
      var updateMousePosition = function updateMousePosition(e) {
        var rect = canvas.getBoundingClientRect();
        mousePosition.x = e.clientX - rect.left;
        mousePosition.y = e.clientY - rect.top;
      };

      // Adjusted mousemove event with throttle
      var throttledUpdateMousePosition = throttle(updateMousePosition, 50); // Adjust delay as needed
      document.body.addEventListener('mousemove', throttledUpdateMousePosition);
      // document.body.addEventListener('mousemove', updateMousePosition);

      document.body.addEventListener('mouseleave', function () {
        mousePosition.x = canvas.width / 2;
        mousePosition.y = canvas.height / 2;
      });
      requestAnimationFrame(animate);
    });
  };
  function drawLines(dots, ctx, mousePosition, config) {
    dots.forEach(function (dot, i) {
      for (var j = i + 1; j < dots.length; j++) {
        var other = dots[j];
        var distance = Math.sqrt(Math.pow(dot.x - other.x, 2) + Math.pow(dot.y - other.y, 2));
        var proximityToMouse = Math.sqrt(Math.pow(dot.x - mousePosition.x, 2) + Math.pow(dot.y - mousePosition.y, 2));
        if (distance < config.dots.distance && proximityToMouse < config.dots.d_radius) {
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      }
    });
  }

  // Utility function to throttle an action
  function throttle(action, delay) {
    var lastRun = 0;
    return function () {
      var now = Date.now();
      if (now - lastRun > delay) {
        action.apply(this, arguments);
        lastRun = now;
      }
    };
  }
  global.PoliAnimate = PoliAnimate;
})(window);
/******/ })()
;
//# sourceMappingURL=index.js.map