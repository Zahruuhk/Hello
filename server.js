const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, Express building');
});

app.get('/about', (req, res) => {
  res.send('API JHOOR');
});
app.get('/api/user', (req, res) => {
    res.json({
       name: 'Zaruq Abdulmuqsit' ,
       age: 22,
       backendDev: true
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});