const http = require('http');
const port = process.env.NODE_PORT || 8080;
const myName = process.env.MY_NAME || "Themba";
const environment = process.env.ENVIRONMENT || "dunno";

const requestHandler = (request, response) => {
	response.setHeader('Content-Type', 'application/json');
		let out={ your: "Friendly JSON Server", environment: environment };
		if (request.url === '/healthcheck' && request.method === 'GET') {
			out={ text: "ok", status: 200, environment: environment };
		}
		// @see https://httpstatuses.com/
		response.statusCode = 200;
		console.log(`${new Date()} ${myName} accessed ${request.url} [${environment}]`);
		response.end(JSON.stringify(out));
	}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	console.log(`server is listening on ${port} [${environment}], healthcheck on /healthcheck`)
})