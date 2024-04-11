"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["inscription"],{

/***/ "./assets/regex.js":
/*!*************************!*\
  !*** ./assets/regex.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_inscription_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/inscription.scss */ "./assets/styles/inscription.scss");




window.onload = function () {
  document.getElementById('user_password_first').addEventListener('input', checkPass);
};
function checkPass() {
  var score = 0;
  var mdp = this.value;
  var minuscule = document.querySelector('#minuscule');
  var majuscule = document.querySelector('#majuscule');
  var speciaux = document.querySelector('#special');
  var longueur = document.querySelector('#longueur');
  var chiffre = document.querySelector('#chiffre');
  var btn = document.querySelector('#soumettre');
  if (/[a-z]/.test(mdp)) {
    minuscule.classList.replace('invalid', 'valid');
    score++;
  } else {
    minuscule.classList.replace('valid', 'invalid');
  }
  if (/[0-9]/.test(mdp)) {
    chiffre.classList.replace('invalid', 'valid');
    score++;
  } else {
    chiffre.classList.replace('valid', 'invalid');
  }
  if (/[A-Z]/.test(mdp)) {
    majuscule.classList.replace('invalid', 'valid');
    score++;
  } else {
    majuscule.classList.replace('valid', 'invalid');
  }
  if (/[&@§!?.]/.test(mdp)) {
    speciaux.classList.replace('invalid', 'valid');
    score++;
  } else {
    speciaux.classList.replace('valid', 'invalid');
  }
  if (mdp.length >= 6) {
    longueur.classList.replace('invalid', 'valid');
    score++;
  } else {
    longueur.classList.replace('valid', 'invalid');
  }
  if (score === 5) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

/***/ }),

/***/ "./assets/styles/inscription.scss":
/*!****************************************!*\
  !*** ./assets/styles/inscription.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-appl-5a1e08","vendors-node_modules_core-js_modules_es_regexp_test_js-node_modules_core-js_modules_es_string-59e4ad"], () => (__webpack_exec__("./assets/regex.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2luc2NyaXB0aW9uLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy9pbnNjcmlwdGlvbi5zY3NzJztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcl9wYXNzd29yZF9maXJzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2hlY2tQYXNzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tQYXNzKCkge1xyXG4gICAgbGV0IHNjb3JlID0gMDtcclxuICAgIGxldCBtZHAgPSB0aGlzLnZhbHVlO1xyXG5cclxuICAgIGxldCBtaW51c2N1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWludXNjdWxlJyk7XHJcbiAgICBsZXQgbWFqdXNjdWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hanVzY3VsZScpO1xyXG4gICAgbGV0IHNwZWNpYXV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwZWNpYWwnKTtcclxuICAgIGxldCBsb25ndWV1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb25ndWV1cicpO1xyXG4gICAgbGV0IGNoaWZmcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hpZmZyZScpO1xyXG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3VtZXR0cmUnKTtcclxuXHJcbiAgICBpZiAoL1thLXpdLy50ZXN0KG1kcCkpIHtcclxuICAgICAgICBtaW51c2N1bGUuY2xhc3NMaXN0LnJlcGxhY2UoJ2ludmFsaWQnLCd2YWxpZCcpO1xyXG4gICAgICAgIHNjb3JlKys7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1pbnVzY3VsZS5jbGFzc0xpc3QucmVwbGFjZSgndmFsaWQnLCdpbnZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBpZiAoL1swLTldLy50ZXN0KG1kcCkpIHtcclxuICAgICAgICBjaGlmZnJlLmNsYXNzTGlzdC5yZXBsYWNlKCdpbnZhbGlkJywndmFsaWQnKTtcclxuICAgICAgICBzY29yZSsrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjaGlmZnJlLmNsYXNzTGlzdC5yZXBsYWNlKCd2YWxpZCcsJ2ludmFsaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZigvW0EtWl0vLnRlc3QobWRwKSkge1xyXG4gICAgICAgIG1hanVzY3VsZS5jbGFzc0xpc3QucmVwbGFjZSgnaW52YWxpZCcsJ3ZhbGlkJyk7XHJcbiAgICAgICAgc2NvcmUrKztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWFqdXNjdWxlLmNsYXNzTGlzdC5yZXBsYWNlKCd2YWxpZCcsJ2ludmFsaWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZigvWyZAwqchPy5dLy50ZXN0KG1kcCkpIHtcclxuICAgICAgICBzcGVjaWF1eC5jbGFzc0xpc3QucmVwbGFjZSgnaW52YWxpZCcsJ3ZhbGlkJyk7XHJcbiAgICAgICAgc2NvcmUrKztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3BlY2lhdXguY2xhc3NMaXN0LnJlcGxhY2UoJ3ZhbGlkJywnaW52YWxpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKG1kcC5sZW5ndGggPj0gNikge1xyXG4gICAgICAgIGxvbmd1ZXVyLmNsYXNzTGlzdC5yZXBsYWNlKCdpbnZhbGlkJywndmFsaWQnKTtcclxuICAgICAgICBzY29yZSsrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsb25ndWV1ci5jbGFzc0xpc3QucmVwbGFjZSgndmFsaWQnLCdpbnZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIGlmIChzY29yZSA9PT0gNSkge1xyXG4gICAgICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrUGFzcyIsInNjb3JlIiwibWRwIiwidmFsdWUiLCJtaW51c2N1bGUiLCJxdWVyeVNlbGVjdG9yIiwibWFqdXNjdWxlIiwic3BlY2lhdXgiLCJsb25ndWV1ciIsImNoaWZmcmUiLCJidG4iLCJ0ZXN0IiwiY2xhc3NMaXN0IiwicmVwbGFjZSIsImxlbmd0aCIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==