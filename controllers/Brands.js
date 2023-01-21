const Brands = require('../models/Brands');
const express = require('express')

const app = express()

// to get all Brands.
exports.getBrands = (req,res,next)=>{
    Brands.find({}).then(brands =>{
  
        res.status(200).json({'brands':brands});
    }).catch(err =>{
        console.log(err);
    })
    
}
// to get the Brand By ID.
exports.getBrandById = (req,res,next) => {
 const BransId = req.params.BrandById;
Brands.findById(BransId).then(bran =>{
  if(!bran){
    const erorr = new Error('could not find Brands');
         erorr.statusCode = 404;
         throw erorr;
  }
  res.status(200).json({message : 'Brand fetched.', brand : bran });
}).catch(err =>{
    if(!err.statusCode){
        err.statusCode = 500;
    }
    next(err);
})

}
// To add a Brand in the database.
exports.postBrands = (req,res,next)=>{
    /*if(!req.file){
        const error = new Error('No images provided');
        error.statusCode = 422;
        throw error;
    }*/
const title = req.body.title;
const ImageUrl = req.body.ImageUrl;

  const brand = new Brands({
    title : title,
    ImageUrl : ImageUrl,
  });

    brand.save().then(result => {

        res.json({'Brands': [result] });

    }).catch(err =>{
        console.log(err)
    })
}
// To Update the Brand in the database.
exports.UpdateBrand = ( req,res,next) =>{
    const brandId = req.params.BrandID;
    const title = req.body.title;
    const ImageUrl = req.body.ImageUrl;
    Brands.findById(brandId).then(brand =>{
        if(!brand){
            const erorr = new Error('could not find Brand');
                 erorr.statusCode = 404;
                 throw erorr;
          }
brand.title = title;
brand.ImageUrl = ImageUrl;
   return brand.save();
    }).then(result => {
        res.status(200).json({message: 'BrandUpdated',brand: result});
    }).catch(err =>{
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    })
}
// To delete the Brand from the database.
exports.deleteBrand = (req,res,next) => {
const BrandID = req.params.BrandById;
   Brands.findById(BrandID).then(bran =>{
    if(!bran){
        const erorr = new Error('could not find Brand');
             erorr.statusCode = 404;
             throw erorr;
      }
      return Brands.findByIdAndRemove(BrandID);
   }).then(result => {
    console.log(result);
    res.status(200).json({message:"Deleted Brand",});
   }).catch(err => {
    if(!err.statusCode){
        err.statusCode = 500;
    }
    next(err);
   });
};