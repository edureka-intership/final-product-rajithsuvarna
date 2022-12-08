const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./Router/index');

const port = process.env.PORT || 8080;
const serverDB = 'mongodb+srv://db_user_29:zoua268cLuMvgixv@cluster0.zcikl.mongodb.net/TestDB?retryWrites=true&w=majority';

const app = express();

app.use(cors());
app.use(express.json());  // parse json object 
app.use('/', router);

mongoose.connect(serverDB,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(port, () => {
            console.log(`Server is running at ${hostname}:${port}`);
        });
    })
    .catch(err => console.log(err));
