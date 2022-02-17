const { Schema, model } = require ('mongoose') ;

const ProductoSchema = Schema ( {
	nombre:{
	    type: String ,
	    required: [true, 'El nombre del producto es obligatorio'] ,
	    unique: true 
    },
	estado:{
	    type: Boolean ,
	    default: true
	},
	precio:{
	    type: Number ,
	    default: 0 ,
		required: true 
	},
	descripcion:{
     	type : String ,
		required: [true,'Debe describir la marca'] ,
	},
	
} ) ;

module.exports = model ('Producto',ProductoSchema );