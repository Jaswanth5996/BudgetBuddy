const express = require('express');
const mongoose = require('mongoose')
const cors= require('cors')
const dbserver = require('./config/db')

const app = express ();

dbserver();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=> {
res.send('API is running')
})
