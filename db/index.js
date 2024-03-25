require("dotenv").config();
const connection = require("./db/connection");

const Usuario = require("./models/Usuario");

connection.
sync()
.then(() => {
    console.log("Conectando e sincronizando!");
})
.catch((err) => {
    console.log("Ocorreu um erro: " + err);
});

/* connection.authenticate().then(()=>{
    console.log("Conectado ao banco de dados com sucesso!");
}).catch((err) =>{
    console.log("Error: " + err)
}); */