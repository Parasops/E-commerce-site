const mongoose = require('mongoose');
const productSchema = new mongoose.schema({
    name: {
        type : string,
        required : true
    },
    price:{
        type : number,
        required : true
    },
    category:{
        type : string,
        required : true
    },
    description:{
        type : string
    }
});
const Product = mongoose.model(Product , productSchema);
export default Product;