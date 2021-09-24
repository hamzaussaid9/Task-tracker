// imports 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// import Routers 
const TaskRouter = require('./routes/tasks.js');
const UserRouter = require('./routes/users.js');

// import verify token for private routes
const verifyToken = require('./verifyToken.js');
const cookieParser = require('cookie-parser');

const app = express();

// middlewares
app.use('/', express.json());
app.use('/', cors({
    credentials: true,
    origin: ['http://localhost:4200', 'http://localhost:3000']
}));
app.use(cookieParser());
app.use('/tasks', TaskRouter);
app.use('/user', UserRouter);


// home route
app.get('/', (req, res) => {
    res.json("we are getting something");
})

// DB Connection
mongoose.connect(process.env.DB_CONNECTION, () => console.log("DB connected"));

// server start
app.listen(process.env.PORT,()=>console.log("server running on port " + process.env.PORT));