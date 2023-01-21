const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    title : {
        type : String,
        required : true
      },
      price : {
        type : Number,
        required : true
      },
      Quantity : {
        type : Number,
        required : true
      },
      ImageUrl : {
        type : String,
        required : true
      },
      categorie : {
        type : String,
        required : true
      },
      description : {
        type : String,
        required : true
      },
      Brand : {
        type : String,
        required : true
      },
      isPopular : {
        type :Boolean,
        required : true,
      },
    
},
{timestamps : true}
);


module.exports = mongoose.model('Products',productsSchema);