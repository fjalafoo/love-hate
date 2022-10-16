const express = require('express')
const router = express.Router()

//routes goes here


//fav animals
router.get('/animals', (req,res)=>{
    const favAnimals=['bunnies','dogs','cats','horses']
    res.render('animals.ejs',{animals:favAnimals})
})

//foods
router.get('/foods', (req,res)=>{
    const favFood=['sushi', 'burgers','pizza', 'shawarma']
    res.render('foods.ejs',{foods:favFood})
})

module.exports = router