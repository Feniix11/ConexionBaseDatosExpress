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
      setTimeout(conMysql, 2000);
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
    connection.query(`SELECT * FROM ${tabla}`, (error, resultado) => {
      return error ? reject(error) : resolve(resultado);
    });
  });
}

function uno(tabla, id) {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${tabla} WHERE id=${id}`,
      (error, resultado) => {
        return error ? reject(error) : resolve(resultado);
      }
    );
  });
}

function agregar(tabla, data) {
  return new Promise((resolve, reject) => {
    let query = connection.query(
      `INSERT INTO ${tabla} SET ? ON DUPLICATE KEY UPDATE ?`,
      [data, data],

      (error, resultado) => {
        console.log(resultado);
        return error ? reject(error) : resolve(resultado);
      }
    );
  });
}

function eliminar(tabla, data) {
  return new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM ${tabla} WHERE id = ?`,
      data.id,
      (error, resultado) => {
        return error ? reject(error) : resolve(resultado);
      }
    );
  });
}

module.exports = {
  todos,
  uno,
  agregar,
  eliminar,
};
