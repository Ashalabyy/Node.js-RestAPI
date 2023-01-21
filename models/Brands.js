const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BrandsSchema = new Schema({
    title : {
     type : String,
     required : true,
    },
    ImageUrl : {
        type : String,
        required : true,
    },
},
{timestamps : true}
);


module.exports = mongoose.model('Brands',BrandsSchema);