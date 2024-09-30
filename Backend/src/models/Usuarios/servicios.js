const USUARIOS = "Usuarios";
const db = require("../../DB/mysql");

function todos() {
  return db.todos(USUARIOS);
}

module.exports = { todos };
