const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');


const app = express();
app.use(bodyParser.json());
app.use(cors(
    {
        origin: 'http://localhost:3000'
    }
));

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  console.log('Received login request:', username, password);

  try {

    const database = db.collection('auth');

    const user = await database.findOne({ username });


    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (password === user.password) {

      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'Invalid password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
