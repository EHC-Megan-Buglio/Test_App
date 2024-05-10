const http = require('http');
const port = process.env.PORT || 3000;

http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write('<div id="rotatingText"></div>');

  // JavaScript for rotating text
  response.write('<script>');
  response.write(`
    const rotatingText = document.getElementById('rotatingText');
    const texts = ['Egg Harbor Cafe', 'Egg Harbor Café', 'Egg Harbor Cafe!'];
    let index = 0;

    function rotateText() {
      rotatingText.innerHTML = texts[index];
      index = (index + 1) % texts.length;
    }

    setInterval(rotateText, 2000); // Change text every 2 seconds
  `);
  response.write('</script>');

  response.end();
}).listen(port);

console.log(`Server running at http://localhost:${port}`);
