const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let clickCount = 0; // Counter for clicks

app.use(express.static('public'));

// Endpoint to increment click count
app.post('/increment-click', (req, res) => {
    clickCount++;
    res.json({ clickCount });
});

// Endpoint to get current click count
app.get('/click-count', (req, res) => {
    res.json({ clickCount });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
