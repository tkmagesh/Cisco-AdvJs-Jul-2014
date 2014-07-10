var fs = require("fs"),
	http = require("http"),
	path = require("path"),
	url = require("url");

var server = http.createServer(function(req,res){
	var resourcePath = path.join(__dirname, url.parse(req.url).pathname);
	if (!fs.existsSync(resourcePath)){
		res.statusCode = 404;
		res.end();
		return;
	}
	fs.createReadStream(resourcePath).pipe(res);
});
server.listen(8080);
console.log("Web server running on port 8080...");