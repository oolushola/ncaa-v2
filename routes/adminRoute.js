const path = require('path')

const express = require('express')
const router = express.Router()

const rootDir = require('../utils/dir')

const products = []

router.get('/add-product', (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('add-product', { pageTitle: 'Add Product', pathName: req.url, productClass: true })
})

router.post('/products', (req, res, next) => {
    const { productName , productPrice, description } = req.body
    products.push({ title: productName, price: productPrice, desc: description })
    res.redirect('/')
})

exports.routes = router
exports.products = products