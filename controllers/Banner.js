const BannerModel = require('../models/Banner');


exports.getBanner = (req,res,next) =>{
    BannerModel.find().then(Banner =>{
        res.status(200).json({ImageUrl : " This is The ImageUrl.."});
        
    }).catch(err =>{
        console.log(err);
    });
    
}
/*
exports.PostBanner =(req,res,next)=>{}

exports.UpdateBanner = (req,res,next)=>{}

exports.deleteBanner = (req,res,next)=>{}
*/