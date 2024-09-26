const db = require("../DB/mysql");

const USUARIOS = "Users";

function todos() {
  return db.todos(USUARIOS);
}

function uno(id) {
  return db.uno(USUARIOS, id);
}
module.exports = {
  todos,
  uno,
};
