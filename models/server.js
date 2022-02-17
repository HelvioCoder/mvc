const express = require('express');                                                
const cors = require('cors');                                                           
const { dbConnection } = require ( '../database/config');

class Server {                                                             

// el constructor                                 
    constructor ( ) {                                                                   
        this.app = express( );                                  
        this.port = process.env.PORT;              
        this.usuariosPath = '/api/usuarios';      
        this.productosPath = '/api/productos'
        
        //middlewares
        this.middlewares( )                         
        //Rutas de aplicación
        this.routes( )
        // conectar a base de datos
     	this.conectarDB ( ) ;
                                    
    }                                                            
    
  // los metodos                                              
    middlewares( ) {

           //cors                                                             
           this.app.use( cors() );

           //lectura y parseo de body                            
           this.app.use( express.json() );

           //directorio publico                                         
           this.app.use( express.static('public') );        
    }

    routes( ){                                                                                                             
           this.app.use(this.usuariosPath, require('../routes/usuarios'));    
           this.app.use(this.productosPath, require('../routes/productos'))           
    }   
    
    async conectarDB ( ) {
        await dbConnection ( ) 
    }
    
    listen( ){
            this.app.listen(this.port, ()=> {                   
            console.log('Servidor corriendo en puerto', this.port);                               
        } )                                                                       
    }
}
module.exports=Server;
