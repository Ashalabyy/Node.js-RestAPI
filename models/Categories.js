const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
    title : {
        type:String,
        required : true
    },
    ImageUrl : {
        type : String,
        required : true,
    }
},
{timestamps : true}
);




module.exports = mongoose.model('Categories',CategoriesSchema);