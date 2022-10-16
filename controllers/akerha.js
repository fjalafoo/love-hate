const express = require('express')
const router = express.Router()

//routes goes here

//movies
router.get('/movies', (req,res)=>{
    const lfavMovies=['Dumb and Dumber: When Harry Met Lloyd', 'Jack and Jill', 'Death Note Netflix Adaption', 'Vampires Sucks' ]
    res.render('movies.ejs',{movies:lfavMovies})
})

//products
router.get('/products', (req,res)=>{
    const lfavProducts=['dabur amla oil', 'plastic', 'starbucks cartoon straw', 'starbucks pumkin spice latte' ]
    res.render('products.ejs',{products: lfavProducts})
})

module.exports = router