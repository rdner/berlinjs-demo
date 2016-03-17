'use strict';

const helpers = require('../../lib/helpers');

class Item {
	render() {
		const index = this.$context.attributes.index;
		return helpers.wait(1000)
			.then(() => this.$context.getStoreData())
			.then(data => data.items[index]);
	}
}

module.exports = Item;
