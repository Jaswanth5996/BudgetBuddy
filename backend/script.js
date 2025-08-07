require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const cors= require('cors')
const dbserver = require('./config/db')

const app = express ();

dbserver();
app.use(cors());
app.use(express.json());

app.use('/api/auth',require('./routes/userRoutes'))
// app.use('/api/savings',require('./routes/savingRoutes'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));