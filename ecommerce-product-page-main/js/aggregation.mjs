export function aggregation(baseClass, ...mixins) {
	function copyProperties(target, source) {
		const allPropertyNames = Object.getOwnPropertyNames(source).concat(Object.getOwnPropertySymbols(source));

		allPropertyNames.forEach((propertyName) => {
			if (propertyName.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
				return;
			Object.defineProperty(target, propertyName, Object.getOwnPropertyDescriptor(source, propertyName));
		});
	}
	class Base extends baseClass {
		constructor(...args) {
			super(...args);

			mixins.forEach((Mixin) => {
				copyProperties(this, new Mixin(...args));
			});
		}
	}
	mixins.forEach((mixin) => {
		copyProperties(Base.prototype, mixin.prototype);
	});
	return Base;
}
