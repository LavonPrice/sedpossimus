export const hasOwn = (
  (has) =>
  (target, property) =>
  Boolean(target && has.call(target, property))
)(Object.prototype.hasOwnProperty);

export default hasOwn;