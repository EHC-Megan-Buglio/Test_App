const http = require('http');
const port = process.env.PORT || 3000;

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = 0;
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

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

                .letter {
                    font-size: 36px;
                }
            </style>
        </head>
        <body>
    `);

    // Generate random colors for each letter
    const text = "Egg Harbor Cafe";
    for (let i = 0; i < text.length; i++) {
        const color = randomRGB();
        response.write(`<span class="letter" style="color: ${color};">${text[i]}</span>`);
    }

    response.write(`
        </body>
        </html>
    `);

    response.end();
}).listen(port);

console.log(`Server running at http://localhost:${port}`);
