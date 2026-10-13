const express = require('express');
const Product = require("../models/Product");

const router  = express.Router();

router.post("/",async(req,res)=>{
    try{
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).josn(savedProduct);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
})