const https = require('https');

var frequency = 1000;

function intervalFunction() {
	https.get('https://gitlab1.com/', (resp) => {

	resp.on('data', (d) => {
		console.log('[%s] Status:', getDate(), resp.statusCode);
		clearInterval(myInterval);
	});

	}).on("error", (err) => {
		console.log("[%s] Error: %s", getDate(), err.message);
	});
}

function getDate(){
	var d = new Date();
	var n = d.toISOString();
	return n;
}

var myInterval = setInterval(intervalFunction, frequency);