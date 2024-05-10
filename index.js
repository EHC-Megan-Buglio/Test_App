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
    </head>
    <body>
      <div id="rotatingText"></div>
      <script>
        const rotatingText = document.getElementById('rotatingText');
        const texts = ['Egg Harbor Cafe', 'Egg Harbor Café', 'Egg Harbor Cafe!'];
        let index = 0;

        function rotateText() {
          rotatingText.textContent = texts[index];
          index = (index + 1) % texts.length;
        }

        setInterval(rotateText, 2000); // Change text every 2 seconds
      </script>
    </body>
    </html>
  `);

  response.end();
}).listen(port);

console.log(`Server running at http://localhost:${port}`);
