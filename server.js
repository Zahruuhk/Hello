const express = require('express');
const app = express();

app.use(express.json());

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
app.post('/api/user', (req, res) => {
    console.log('Received data:', req.body);
    res.json({
        message: 'User data received',
        data: req.body
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});