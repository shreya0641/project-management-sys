const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sdp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('open', () => {
    console.log('Connected to MongoDB');
    }
);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;