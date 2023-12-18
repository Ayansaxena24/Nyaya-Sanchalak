require('dotenv').config();
const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { credentials } = require('./middlewares/credentials');
const { connectToMongoDB } = require('./config/dbConnection');
const corsOptions = require('./config/corsOptions');

const scheduler = require('./controllers/scheduler')

// app
const app = express();

// db
connectToMongoDB();

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '2mb'}));

app.use(credentials);
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());


// routes middleware
fs.readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)));

// port
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.json({
        message: 'Server is running'
    })
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });