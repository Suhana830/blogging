const express = require("express");
const staticRouter = require("./router/staticzrouter")
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/blogging").then(()=>console.log("mongoose connected")).catch((err) => console.log(err));

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));

app.use("/",staticRouter)

app.listen(8000,()=> {console.log("server connected")});