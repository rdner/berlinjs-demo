'use strict';

class List {
	load() {
		switch (this.$context.state.type) {
			case 'animals':
				return this.$context.getStoreData('Animals');
			case 'food':
				return this.$context.getStoreData('Food');
			default:
				return [];
		}
	}
}

module.exports = List;
