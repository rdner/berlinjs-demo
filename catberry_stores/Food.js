'use strict';

class Food {
	constructor(locator) {
		this._uhr = locator.resolve('uhr');
	}
	load() {
		const uri = this.$context.location.clone();
		uri.scheme = 'http';
		uri.path = '/public/food.json';
		uri.query = null;
		return this._uhr.get(uri.toString())
			.then(result => result.content);
	}
}

module.exports = Food;
