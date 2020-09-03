const Squelize = require ('sequelize');
let express = require ("express");
let server = express();
server.use (express.json ());

let db = new Squelize ( //db database o base de datos
    "mysql://root:1234@localhost:3306/canciones" //se creo la cadena de conexion
)   //se indica que la base de datos es "mysql:// se escribe el usuario en este caso root : 
    //se escribe la contraseña seguida de una @ se indica donde esta ubicada la base de datos en este caso
    //localhost : se escribe el puerto en este caso 3306 / se escribe el nombre de la base de datos
    //en este caso canciones

db.authenticate () //esta invocacion de metodo promesa es la conexion a la base de datos
.then (()=>{
    console.log ("Base de datos conectada")
})
.catch ((error)=>{
    console.log (error)
})

server.get ("/canciones",(req,res,next)=>{
    db.query('select * FROM canciones;', {type: Squelize.QueryTypes.SELECT }) //consulta a la base de datos
    .then((data)=>{ //si todo esta bien 
        res.json(data); //responda los datos que trajo de la base de datos
    })
    .catch ((error) =>{ //si algo fallo retorne un error
        res.status(500); // 500 -> internal server error
        res.json(error);
    })
});



server.listen (3008, ()=>{
    console.log ("Escuchando")
})