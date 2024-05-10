const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (like CSS and client-side JavaScript)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
