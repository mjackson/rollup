var bundle = (function (exports, external) {
	'use strict';

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex : { 'default': ex }; }

	var external__default = /*#__PURE__*/_interopDefault(external);

	console.log(external.value);

	Object.defineProperty(exports, 'reexported', {
		enumerable: true,
		get: function () {
			return external__default['default'];
		}
	});

	return exports;

}({}, external));
