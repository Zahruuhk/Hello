const express = require('express');
const app = express();

app.use(express.json());

let users = [
    {id: 1, name: 'Zaruq' }
];
//app.get('/', (req, res) => {
    //res.send('Hello, Express building');
//});

//app.get('/about', (req, res) => {
 // res.send('API JHOOR');
//});
app.get('/api/users', (req, res) => {
    res.json(users);
});
app.post('/api/users', (req, res) => {
  const { name, age } = req.body;
  console.log('Received data:', req.body);

  res.json({
    message: 'User data received!',
    data: req.body
  });
});


app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  user.name = req.body.name || user.name;
  res.json(user);
});

app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(u => u.id !== userId);
  res.json({ message: 'User deleted' });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});