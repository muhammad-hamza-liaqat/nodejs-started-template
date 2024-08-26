const express = require("express");
require("dotenv").config();


const app = express();


app.listen(process.env.PORT, ()=>{
    console.warn(`server is running at http://localhost:${process.env.PORT}/`)
})