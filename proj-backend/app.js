require("dotenv").config();
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require("./routes/auth");

const app = express();

//DB connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED");
}).catch(() => {
    console.log("DB GOT OOPSS");
});

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", authRoutes);

//PORT
const port = process.env.PORT || 8000;

//Starting the server
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});