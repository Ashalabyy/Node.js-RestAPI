const Categories = require('../models/Categories');


exports.getCategories = (req,res,next)=>{
    
    Categories.find().then(categories =>{
        res.status(200).json({'categories': categories,},);
    }).catch(err =>{
        console.log(err);
    })
}

exports.postCategories = (req,res,next)=> {
const title = req.body.title;
const ImageUrl = req.body.ImageUrl;

const categorie = new Categories({
    title : title,
    ImageUrl : ImageUrl,
});
categorie.save().then(result =>{
    res.json({'Categories': [result] });
}).catch(err =>
    console.log(err)
    );

}

exports.deleteCategorie = (req,res,next) => {
    const CatID = req.params.CatById;
       Categories.findById(CatID).then(cat =>{
        if(!cat){
            const erorr = new Error('could not find Categorie');
                 erorr.statusCode = 404;
                 throw erorr;
          }
          return Categories.findByIdAndRemove(CatID);
       }).then(result => {
        console.log(result);
        res.status(200).json({message:"Deleted Categories",});
       }).catch(err => {
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
       });
    };