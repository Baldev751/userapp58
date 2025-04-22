const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const userroute = require("../routes/userRoutes");
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

module.exports = app;
