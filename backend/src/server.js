const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDatabase = require('./config/database');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDatabase();

app.get("/", (req, response) => {
    response.send("App is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is running.....");
})
