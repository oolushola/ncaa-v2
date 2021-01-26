const express = require('express')
const router = express.Router()

const path = require('path')
const adminRoute = require('./adminRoute')

const rootDir = require('../utils/dir')

router.get('/', (req, res, next) => {
    // console.log(adminRoute.products)
   // res.sendFile(path.join(rootDir, 'views', 'shop.html')) // This is used to serve an HTML File
    const productsList = adminRoute.products
    const url = req.url
    hasProducts = productsList.length > 0
    res.render('shop', { products: productsList, pageTitle: 'My Shop!', pathName: '/', hasProducts, shopClass:true })
})

module.exports = router