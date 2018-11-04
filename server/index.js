/*
react
redux
react router
*/
require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cookie = require("cookie-session");
const http = require('http');
const path = require('path');
// const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');

const app = express();

// Project Modules
const socketServer = require("./redis-sockets");

// Env variables
const PORT = process.env.PORT;
/**
 * Configs
 */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookie({
  name: "session",
  httpOnly: true,
  signed: true,
  secret: process.env.COOKIE_SECRET,
  maxAge: 3600 * 1000,
}));

/**
 * Routes
 */
app.use("/login", require("./login"));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, '../', 'build')));
app.use(express.static(path.join(__dirname, '../','build')));

const httpServer = http.createServer(app);
const io = socketServer(httpServer)
httpServer.listen( PORT, () => console.log( "App is running on", PORT ));
