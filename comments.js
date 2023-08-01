// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse JSON
app.use(bodyParser.json());

// Create array
const comments = [
  {
    username: 'taro',
    body: 'first comment!'
  },
  {
    username: 'hanako',
    body: 'second comment!'
  }
];

// Set route
app.get('/api/comments', (req, res) => {
  res.send(comments);
});

app.post('/api/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.send(comment);
});

// Start web server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});