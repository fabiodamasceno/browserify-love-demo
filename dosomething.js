var Promise = require('bluebird')

module.exports = function(a, b){
	var p = new Promise()
	if(a > b)
		p.reject()
	p.resolve()
}
