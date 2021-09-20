const mongoose = require('mongoose');
require('dotenv').config();

mongoose
.connect(process.env.ATLAS)
.then(()=>console.log("Connected with Mongodb Atlas!"))
.catch((e)=>console.log('DB connection error: ', e));
