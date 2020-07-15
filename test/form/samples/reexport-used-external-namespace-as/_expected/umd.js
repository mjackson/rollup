(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('external1'), require('external2')) :
	typeof define === 'function' && define.amd ? define(['exports', 'external1', 'external2'], factory) :
	(global = global || self, factory(global.bundle = {}, global.external1, global.external2));
}(this, (function (exports, imported1, external2) { 'use strict';

	function _interopNamespace(e) {
		if (e && e.__esModule) { return e; } else {
			var n = Object.create(null);
			if (e) {
				Object.keys(e).forEach(function (k) {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () {
							return e[k];
						}
					});
				});
			}
			n['default'] = e;
			return Object.freeze(n);
		}
	}

	var imported1__ns = /*#__PURE__*/_interopNamespace(imported1);
	var external2__ns = /*#__PURE__*/_interopNamespace(external2);

	console.log(imported1__ns, external2.imported2);

	exports.external1 = imported1__ns;
	exports.external2 = external2__ns;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
