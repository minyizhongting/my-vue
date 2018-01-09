var path = require('path');

String.prototype.join = function(target) {
	return path.join(this.toString(), target);
}

var ROOT = path.resolve(__dirname, '..');

module.exports = {
	ROOT: ROOT,
	SRC: ROOT.join('src')
};

