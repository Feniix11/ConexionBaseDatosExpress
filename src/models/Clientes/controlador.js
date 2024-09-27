const CLIENTES = "Clientes";

module.exports = function (dbInyectada) {
  let db = dbInyectada;

  if (!db) {
    db = require("../../DB/mysql");
  }
  function todos() {
    return db.todos(CLIENTES);
  }

  function uno(id) {
    return db.uno(CLIENTES, id);
  }

  function agregar(body) {
    return db.agregar(CLIENTES, body);
  }

  function eliminar(body) {
    return db.eliminar(CLIENTES, body);
  }

  return {
    todos,
    uno,
    agregar,
    eliminar,
  };
};
