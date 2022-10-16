const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const PORT = 3000
//MIDDLEWARE
app.set('view engine', 'ejs')
app.use(ejsLayouts)
//controllers middleware
app.use('/akerha', require('./controllers/akerha'))
app.use('/ahbeh', require('./controllers/ahbeh'))

//ROUTES

//home
app.get('/',(req,res)=>{
    res.render('home.ejs')
})




app.listen(PORT, ()=>{
    console.log(`You're running ahbeh-akerha app.`)
})