require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//const productRoutes = require('../routes/productRoutes.js')
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.json({message:"Backend started"});
});

//app.use("/products", productRoutes);

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Mongodb connected");

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
})
.catch((error) => {
    console.log("Connection failed:", error.message);
});
