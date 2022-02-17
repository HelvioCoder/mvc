const {Router} = require('express');      
const {productosPost} = require('../controllers/productos');         


const router = Router();             

//vamos a ir poniendo todas las rutas de mi api referido a lo de usuarios
             
                                                                 
router.post ('/', productosPost)             


module.exports = router