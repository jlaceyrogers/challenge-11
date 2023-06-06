const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
  });
  

app.get('/api/notes', (req, res) => {
  res.json(db);
});

app.post('/api/notes', (req, res) => {
  let note = req.body;
  db.push(note);

  fs.writeFile(path.join(__dirname, '/db/db.json'), JSON.stringify(db), (err) => {
    if (err) throw err;
    console.log('Note saved to db.json');
  });

  res.json(note);
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  db = db.filter(note => note.id !== id);

  fs.writeFile(path.join(__dirname, '/db/db.json'), JSON.stringify(db), (err) => {
    if (err) throw err;
    console.log('Note deleted from db.json');
  });

  res.json(db);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
