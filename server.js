require("dotenv").config();
const express = require("express");
const cors = require("cors");
require('./connection.js')
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const productRouter = require("./Controllers/Product.js");
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/product", productRouter);
app.get('/',(req,res)=>{
res.send('welcome manish page')
})

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
