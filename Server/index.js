const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const appRoot = require('app-root-path');
require('dotenv').config({
    path: appRoot + '/.env'
})

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.DB_URI)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`)
});