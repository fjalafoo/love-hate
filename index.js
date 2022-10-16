const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const PORT = 3000
//MIDDLEWARE
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//ROUTES

//home
app.get('/',(req,res)=>{
    res.render('home.ejs')
})

//fav animals
app.get('/animals', (req,res)=>{
    const favAnimals=['bunnies','dogs','cats','horses']
    res.render('animals.ejs',{animals:favAnimals})
})



app.listen(PORT, ()=>{
    console.log(`You're running ahbeh-akerha app.`)
})