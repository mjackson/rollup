define(['external'], function (path) { 'use strict';

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex : { 'default': ex }; }

	var path__default = /*#__PURE__*/_interopDefault(path);

	console.log(path__default['default'].normalize('foo\\bar'));
	console.log(path__default['default'].normalize('foo\\bar'));

});
