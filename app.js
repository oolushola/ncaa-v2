const express = require('express')
const adminRoute = require('./routes/adminRoute')
const shopRoute = require('./routes/shopRoute')
const bodyParser = require('body-parser')
//const handlebars = require('express-handlebars')
const app = express()
const PORT = 5000

const path = require('path')

// app.engine('hbs', handlebars({layoutsDir: 'views/layouts', defaultLayout: 'main-layout', extname: 'hbs' }))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(shopRoute)
app.use('/admin/', adminRoute.routes)

app.use('*', (req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
    //res.status(404).render('404', { pageTitle: 'Page Not Found '})
    res.status(404).render('404', { pageTitle: 'Page not found'})
})

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT: ${PORT}`)
})