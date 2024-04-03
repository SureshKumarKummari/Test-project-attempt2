const sequelize=require('./util/database');
const admin = require('./routes/admin');

const Books=require('./models/slots');

const bookedSlot=require('./models/bookedSlots');

const express = require('express');

const cors=require('cors');

const bodyParser = require('body-parser');

const app = express();

app.use(cors());


app.use(bodyParser.json());

app.use(admin);


sequelize.sync()
    .then(() => {
        app.listen(3000);

    })
    .catch((err) => {
        console.log(err);
});


