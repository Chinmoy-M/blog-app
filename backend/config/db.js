const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.set('strictQuery', false);


mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
});