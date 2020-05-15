const bodyParser = require('body-parser');
const express = require('express');
const connectDB = require('./config/db');

const app = express();
app.use(bodyParser.json());
//Connect DB
connectDB();

// Routes
// app.use(bodyParser());

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

app.use(express.json({extended:false}));

const PORT = 5000;
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));

