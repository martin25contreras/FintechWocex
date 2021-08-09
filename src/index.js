const express = require('express');
const apiV1 = require('./route/route');
const bodyParser = require('body-parser');
const connectToDB = require('./database');
const dotenv = require("dotenv");

dotenv.config({ path: 'ENV_FILENAME' });

const PORT = 5000;
const app = express();
app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());

apiV1.createRoute(app);

app.use((req, res)=> {
    console.log('NOT FOUND')
    res.status(404).send("NOT FOUND");
    res.end();
});

app.listen(PORT, () => {
    console.log("Running on: "+ PORT);
    connectToDB;
});

