(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/animation.js":
/*!*****************************!*\
  !*** ./assets/animation.js ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script.js */ "./assets/script.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation.js */ "./assets/animation.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_animation_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");


/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)



fetch('api/products').then(function (response) {
  return response.json();
}).then(function (json) {
  return console.log(json);
});

/***/ }),

/***/ "./assets/script.js":
/*!**************************!*\
  !*** ./assets/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _searchbar_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchbar.ts */ "./assets/searchbar.ts");
/* harmony import */ var _searchbar_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_searchbar_ts__WEBPACK_IMPORTED_MODULE_2__);



var menu = document.querySelector(".menu");
var spanTop = document.querySelector("#top");
var spanMiddle = document.querySelector("#middle");
var spanBottom = document.querySelector("#bottom");
var links = document.querySelector(".links");
menu.addEventListener("click", menuburger);
function menuburger() {
  if (menu.classList[1] != "open") {
    menu.classList.add("open");
    spanMiddle.style.display = "none";
    spanBottom.style.marginTop = "-5px";
    spanBottom.style.transform = "rotate(45deg)";
    spanTop.style.transform = "rotate(-45deg)";
    links.style.top = "70px";
  } else {
    spanMiddle.style.display = "block";
    spanBottom.style.marginTop = "5px";
    spanBottom.style.transform = "rotate(0deg)";
    spanTop.style.transform = "rotate(0deg)";
    links.style.top = "-300px";
    menu.classList.remove("open");
  }
}
console.log('coucou');
fetch('/api/products').then(function (resp) {
  return resp.json();
}).then(function (json) {
  return console.log(json);
});

/***/ }),

/***/ "./assets/searchbar.ts":
/*!*****************************!*\
  !*** ./assets/searchbar.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var vue_1 = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
(0, vue_1.createApp)({
  compilerOptions: {
    delimiters: ['${', '}$']
  },
  data: function data() {
    return {
      timeout: null,
      isLoading: false,
      produits: null
    };
  },
  methods: {
    updateInput: function updateInput(event) {
      var _this = this;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        return __awaiter(_this, void 0, void 0, function () {
          var response, body, e_1;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                this.isLoading = true;
                _a.label = 1;
              case 1:
                _a.trys.push([1, 4,, 5]);
                return [4 /*yield*/, fetch("/produit/search/".concat(this.$refs.input.value))];
              case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
              case 3:
                body = _a.sent();
                this.produits = JSON.parse(body);
                this.isLoading = false;
                console.log(this.produits);
                console.log(body);
                return [3 /*break*/, 5];
              case 4:
                e_1 = _a.sent();
                this.isLoading = false;
                this.produits = null;
                return [3 /*break*/, 5];
              case 5:
                return [2 /*return*/];
            }
          });
        });
      }, 1000);
    }
  }
}).mount('#search');

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-appl-5a1e08","vendors-node_modules_vue_dist_vue_esm-bundler_js-node_modules_core-js_modules_es_array_push_j-35abfb"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQ0MsS0FBSyxDQUFDNUMsSUFBSSxDQUFDO2dCQUNoQyxJQUFJLENBQUM4QixTQUFTLEdBQUcsS0FBSztnQkFDdEJ0RSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNzRSxRQUFRLENBQUM7Z0JBQzFCdkUsT0FBTyxDQUFDQyxHQUFHLENBQUN1QyxJQUFJLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7Y0FDM0IsS0FBSyxDQUFDO2dCQUNGc0MsR0FBRyxHQUFHQyxFQUFFLENBQUNwQyxJQUFJLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMyQixTQUFTLEdBQUcsS0FBSztnQkFDdEIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztjQUMzQixLQUFLLENBQUM7Z0JBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXO1lBQ2pDO1VBQ0osQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO01BQUUsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUNoQjtFQUNKO0FBQ0osQ0FBQyxDQUFDLENBQUNjLEtBQUssQ0FBQyxTQUFTLENBQUM7Ozs7Ozs7Ozs7OztBQ3JGbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NlYXJjaGJhci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3NjcmlwdC5qcyc7XHJcbmltcG9ydCAnLi9hbmltYXRpb24uanMnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbmZldGNoKCdhcGkvcHJvZHVjdHMnKVxyXG4udGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbi50aGVuKGpzb24gPT4gY29uc29sZS5sb2coanNvbikpOyIsImltcG9ydCAnLi9zZWFyY2hiYXIudHMnO1xyXG5cclxubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XHJcbmxldCBzcGFuVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3BcIik7XHJcbmxldCBzcGFuTWlkZGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtaWRkbGVcIik7XHJcbmxldCBzcGFuQm90dG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib3R0b21cIik7XHJcbmxldCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlua3NcIik7XHJcblxyXG5cclxubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVudWJ1cmdlcik7XHJcblxyXG5cclxuZnVuY3Rpb24gbWVudWJ1cmdlcigpe1xyXG5cclxuICAgIGlmKG1lbnUuY2xhc3NMaXN0WzFdICE9IFwib3BlblwiKXtcclxuICAgICAgICBcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgICAgIHNwYW5NaWRkbGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHNwYW5Cb3R0b20uc3R5bGUubWFyZ2luVG9wID0gXCItNXB4XCI7XHJcbiAgICAgICAgc3BhbkJvdHRvbS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg0NWRlZylcIjtcclxuICAgICAgICBzcGFuVG9wLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKC00NWRlZylcIjtcclxuICAgICAgICBsaW5rcy5zdHlsZS50b3AgPSBcIjcwcHhcIjtcclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBzcGFuTWlkZGxlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgc3BhbkJvdHRvbS5zdHlsZS5tYXJnaW5Ub3AgPSBcIjVweFwiO1xyXG4gICAgICAgIHNwYW5Cb3R0b20uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMGRlZylcIjtcclxuICAgICAgICBzcGFuVG9wLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCI7XHJcbiAgICAgICAgbGlua3Muc3R5bGUudG9wID0gXCItMzAwcHhcIjtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zb2xlLmxvZygnY291Y291JylcclxuXHJcbmZldGNoKCcvYXBpL3Byb2R1Y3RzJylcclxuLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcclxuLnRoZW4oanNvbiA9PiBjb25zb2xlLmxvZyhqc29uKSkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB2dWVfMSA9IHJlcXVpcmUoXCJ2dWVcIik7XG4oMCwgdnVlXzEuY3JlYXRlQXBwKSh7XG4gICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgIGRlbGltaXRlcnM6IFsnJHsnLCAnfSQnXSxcbiAgICB9LFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpbWVvdXQ6IG51bGwsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgcHJvZHVpdHM6IG51bGxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlSW5wdXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBib2R5LCBlXzE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDQsICwgNV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKFwiL3Byb2R1aXQvc2VhcmNoL1wiLmNvbmNhdCh0aGlzLiRyZWZzLmlucHV0LnZhbHVlKSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlc3BvbnNlLmpzb24oKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1aXRzID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVpdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVpdHMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pOyB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cbn0pLm1vdW50KCcjc2VhcmNoJyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm1lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzcGFuVG9wIiwic3Bhbk1pZGRsZSIsInNwYW5Cb3R0b20iLCJsaW5rcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJtZW51YnVyZ2VyIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwidHJhbnNmb3JtIiwidG9wIiwicmVtb3ZlIiwicmVzcCIsInJlcXVpcmUiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInZhbHVlIiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJhcHBseSIsIl9fZ2VuZXJhdG9yIiwiYm9keSIsIl8iLCJsYWJlbCIsInNlbnQiLCJ0IiwidHJ5cyIsIm9wcyIsImYiLCJ5IiwiZyIsInZlcmIiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm4iLCJ2Iiwib3AiLCJUeXBlRXJyb3IiLCJjYWxsIiwicG9wIiwibGVuZ3RoIiwicHVzaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZ1ZV8xIiwiY3JlYXRlQXBwIiwiY29tcGlsZXJPcHRpb25zIiwiZGVsaW1pdGVycyIsImRhdGEiLCJ0aW1lb3V0IiwiaXNMb2FkaW5nIiwicHJvZHVpdHMiLCJtZXRob2RzIiwidXBkYXRlSW5wdXQiLCJldmVudCIsIl90aGlzIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImVfMSIsIl9hIiwiY29uY2F0IiwiJHJlZnMiLCJpbnB1dCIsIkpTT04iLCJwYXJzZSIsIm1vdW50Il0sInNvdXJjZVJvb3QiOiIifQ==