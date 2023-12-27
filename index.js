const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); 
const { offerRouter } = require('./Router/OffersRouter');
const { brandRouter } = require('./Router/BrandRouter'); 
const { productRouter } = require('./Router/ProductRouter');
const fileUpload = require('express-fileupload');
const { cartRouter } = require('./Router/CartRouter'); 
const { wishlistRouter } = require('./Router/WishlistRouter'); 
const { filterNavbarRouter } = require('./Router/FilterNavbar');
const { browsingHistoryRouter } = require('./Router/BrowsingHistoryRouter');
const { childNavbarRouter } = require('./Router/childRouter');
const { parentNavbarRouter } = require('./Router/parentRouter');
const { parentFatherNavbarRouter } = require('./Router/parentFatherRouter');
const { uploadRouter } = require('./Router/uploadRouter');
const { upNavbarRouter } = require('./Router/upNavbarRouter'); 
const { shopByBrandRouter } = require('./Router/shopByBrandRouter');
const { shopByCategoryRouter } = require('./Router/shopByCategoryRouter');
const { geocode } = require('./Router/geocode');
const { auth } = require('./Router/Auth');
const { paymentRouter } = require('./Router/PaymentRouter');
const { popularCategory } = require('./Router/PopularCategory');
const sequelize = require('./config/database');
const { orderRouter } = require('./Router/Order');


const handleSyncDatabase = async () => {
    try {
    let result = await sequelize.sync({force: false});
    console.log('Successfully database sync');
    } catch (error) { 
    console.log(error.message);
    }
}

handleSyncDatabase()

app.use(bodyParser.json());
app.use(fileUpload({limits:'100mb'}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '100mb'
}))
app.use(cors({origin: '*'}))
// application config end
const PORT = process.env.PORT || 10000;
app.use(express.static('public'))
app.listen(PORT, (err)=>{
    if(!err){
        console.log(`Server is running on PORT http://localhost:${PORT}`);
    }
})

// api endpoints start
app.use('/api/v1/child-navbar',  childNavbarRouter);
app.use('/api/v1/auth', auth)
app.use('/api/v1/geocode', geocode)
app.use('/api/v1/offers', offerRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/offers', offerRouter);
app.use('/api/v1/brands', brandRouter);
app.use('/api/v1/cart',  cartRouter);
app.use('/api/v1/wishlist',  wishlistRouter);
app.use('/api/v1/filter-navbar',  filterNavbarRouter);
app.use('/api/v1/parent-navbar',  parentNavbarRouter);
app.use('/api/v1/parent-father-navbar',  parentFatherNavbarRouter);
app.use('/api/v1/up-navbar',  upNavbarRouter);
app.use('/api/v1/browsing-history', browsingHistoryRouter);
app.use('/api/v1/shop-by-brand', shopByBrandRouter);
app.use('/api/v1/shop-by-category', shopByCategoryRouter);
app.use('/api/v1/file/upload', uploadRouter);
app.use('/api/v1/payment', paymentRouter);
app.use('/api/v1/popular-category', popularCategory);
app.use('/api/v1/order', orderRouter);

app.get('/',(req, res)=>{
    res.send(`<h1>Hello world</h1>`)
})

// Error handling middleware
app.use((err, req, res, next) => {

    // Set the status code for the response
    res.status(err.status || 500);
    
        // Send the error message as JSON
        res.json({
            error: {
            message: err.message
            }
        });
});