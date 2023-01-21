const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BannerSchema = new Schema({
    ImageUrl : {
        type: String,
        required : true,
    }
});

module.exports = mongoose.model('Banner',BannerSchema);