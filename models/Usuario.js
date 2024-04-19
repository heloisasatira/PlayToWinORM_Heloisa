const db = require('../db/connection');
const { DataTypes } = require("sequelize");

const Usuario = db.define("Usuario", {
    nickname: {
        type: DataTypes.STRING,
        required: true,
    },
    nome: {
        type: DataTypes.STRING,
        required: true,
    },
});

module.exports =  Usuario;

app.post("/usuarios/novo", async (req, res) => {
    const nickname = req.body.nickname;
    const nome = req.body.nome;
    
    const dadosUsuario = {
        nickname,
        nome,
    };
});

const usuario = await Usuario.create(dadosUsuario);
res.sent("Usuário inserido sob o id " + usuario.id);