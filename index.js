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
        body {
          background-color: #f9f9f9;
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }

        #rotatingText {
          font-size: 36px;
          animation: rainbowText 7s linear infinite;
          background-image: linear-gradient(90deg, violet, indigo, blue, green, yellow, orange, red, violet);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        @keyframes rainbowText {
          0% {
            background-position: 0% 50%;
          }
          14.3% {
            background-position: 100% 50%;
          }
          28.6% {
            background-position: 0% 50%;
          }
          42.9% {
            background-position: 100% 50%;
          }
          57.2% {
            background-position: 0% 50%;
          }
          71.5% {
            background-position: 100% 50%;
          }
          85.8% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
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
