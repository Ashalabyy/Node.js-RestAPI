const Products = require('../models/Products');

// to fetch Product to the DataBase
exports.getProducts = (req,res,next)=> {
    Products.find().then(products => {
        res.status(200).json({'products':  products,});
    }).catch(err => {
        console.log(err);
    }); 
}
// to Post Product to the DataBase
exports.PostProducts = (req,res,next)=>{
    const title = req.body.title;
    const price = req.body.price;
    const Quantity = req.body.Quantity;
    const ImageUrl = req.body.ImageUrl;
    const categorie = req.body.categorie;
    const description = req.body.description;
    const Brand = req.body.Brand;
    const isPopular = req.body.isPopular;
    
    const product = new Products({
        title : title,
        price : price,
        Quantity:Quantity,
        ImageUrl : ImageUrl,
        categorie:categorie,
        description : description,
        Brand : Brand,
        isPopular :isPopular,       
            });  
    product.save().then(result => {
        res.json({'products':  [
            result
        ],
    });
    }).catch(err => {
        console.log(err);
    })
   
}