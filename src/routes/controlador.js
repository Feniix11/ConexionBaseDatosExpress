const db = require("../DB/mysql");

function todos(tabla) {
  return db.todos(tabla);
}

module.exports = {
  todos,
};
