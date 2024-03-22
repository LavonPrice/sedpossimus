'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const hasOwn = (
  (has) =>
  (target, property) =>
  Boolean(target && has.call(target, property))
)(Object.prototype.hasOwnProperty);

exports.hasOwn = hasOwn;
exports.default = hasOwn;