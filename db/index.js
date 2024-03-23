require("dotenv").config();
const connection = require("./db/connection");

connection.authenticate().then(()=>{
    console.log("Conectado ao banco de dados com sucesso!");
}).catch((err) =>{
    console.log("Error: " + err)
});