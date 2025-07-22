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
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
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
  users = users.filter(u => u.id != req.params.id);
  res.json({ msg: 'Deleted' });
});
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});