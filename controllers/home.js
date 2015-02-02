//takes the browser's request and lets us send back a page or other information
module.exports = {
	index: function(req, res) {
		res.send('The home:index controller');
	}
};