const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

http.createServer(function(request, response) {
  if (request.url === '/') {
    // Serve the HTML file
    fs.readFile('index.html', function(err, data) {
      if (err) {
        response.writeHead(500);
        response.end('Error loading index.html');
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
      }
    });
  } else {
    // Handle other requests
    // Your other server logic here
  }
}).listen(port);

console.log(`Server running at http://localhost:${port}`);
