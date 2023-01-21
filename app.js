const mongoose = require('mongoose');

//const multer = require('multer');

const bodyParser = require('body-parser');

const path = require('path');

const cors = require('cors');

const express = require('express');

const ProductsRoute = require('./routes/Products');

const CategorieRoute = require('./routes/Categories');

const BrandsRoute = require('./routes/Brands');

const BannerRoute = require('./routes/Banner');

const PORT = process.env.PORT || 3000;

const DB = 'mongodb+srv://ashalaby:Abc-1995@restapi.rceorc0.mongodb.net/Shop?retryWrites=true&w=majority';

const app = express();


// For parsing the Body that is Coming from Flutter.
app.use(bodyParser.json({limit: '10mb', extended: true}));

//app.use(multer({storage: fileStorge, fileFilter: fileFilter}).single('image'));

app.use('/images',express.static(path.join(__dirname,'images')));
// this allows me to use multiple cros origin and work with flutter
app.use(cors());

// Siting the Header's so we can access from any application .
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type, Authorization');
    next();
})

app.use(ProductsRoute);
 
app.use(CategorieRoute);

app.use(BrandsRoute);

app.use(BannerRoute);

// Handling the erorr in a middleware
app.use((erorr,req,res,next)=> {
    console.log(erorr);
    const status = erorr.statusCode || 500;
    const Message = erorr.message;
    res.status(status).json({message : Message});
});

mongoose.set("strictQuery", false);
mongoose.connect(DB).then( client =>{
    app.listen(PORT);
    console.log(`Connected to Mongoose  ${PORT}`);
}).catch(err => {
    console.log(err);
}); 