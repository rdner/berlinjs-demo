'use strict';

module.exports = {
	wait(milliseconds) {
		return new Promise(fulfill => setTimeout(fulfill, milliseconds));
	}
}
