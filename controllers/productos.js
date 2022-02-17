const Producto = require('../models/producto')



const productosPost = async ( req, res ) => {      
    
    const { nombre, estado, precio, descripcion } = req.body;

    const producto = new Producto({ nombre, estado, precio, descripcion })

    await producto.save()

    res.status (200).json({
        msg: 'POST PRODUCTOS',
        producto                                                           
        })
}


module.exports = {                                
productosPost

}