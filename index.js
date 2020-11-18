/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = require("electron");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
(() => {
/*!******************************!*\
  !*** ./mainProcess/index.ts ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
var electron = __webpack_require__(/*! electron */ "electron");
var ipcMain = __webpack_require__(/*! electron */ "electron").ipcMain;
var dialog = __webpack_require__(/*! electron */ "electron").dialog;
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow;
app.on("ready", function () {
    mainWindow = new BrowserWindow({ width: 900, height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL("file://" + __dirname + "/index.html");
    mainWindow.webContents.openDevTools();
    mainWindow.on("closed", function () {
        mainWindow = null;
    });
});

})();

/******/ })()
;
//# sourceMappingURL=index.js.map