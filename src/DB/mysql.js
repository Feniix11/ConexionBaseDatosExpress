const mysql = require("mysql2");
const config = require("../config");

let connection = null;

function conMysql() {
  connection = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
  });

  connection.connect((err) => {
    if (err) {
      console.log("[db err]", err);
      setTimeout(conMysql, 200);
    } else {
      console.log("DB Conectada!!!");
    }
  });

  connection.on("error", (err) => {
    console.log("[db err]", err);
    if (err.code === "PROTOCOLO_CONNECTION_LOST") {
      conMysql();
    } else {
      throw err;
    }
  });
}

conMysql();

function todos(tabla) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${tabla}`, (err, resultado) => {
      if (err) {
        return reject(err);
      } else {
        resolve(resultado);
      }
    });
  });
}

function uno(tabla, id) {}

function agregar(tabla, data) {}

function eliminar(tabla, id) {}

module.exports = {
  todos,
  uno,
  agregar,
  eliminar,
};
