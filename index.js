const http = require('http');
const port = process.env.PORT || 3000;

http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Egg Harbor Cafe</title>
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        #rotatingText {
          animation: spin 4s linear infinite;
        }
      </style>
    </head>
    <body>
      <div id="rotatingText">Egg Harbor Cafe</div>
    </body>
    </html>
  `);

  response.end();
}).listen(port);

console.log(`Server running at http://localhost:${port}`);
