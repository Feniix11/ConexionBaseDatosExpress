const AUTH = "Auth";
const bcrypt = require("bcrypt");

module.exports = function (db) {
  if (!db) {
    db = require("../../DB/mysql");
  }

  async function agregar(data) {
    console.log("DATA ", data);

    const authData = {
      id: data.id,
    };

    if (data.usuario) {
      authData.usuario = data.usuario;
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 5);
    }

    return db.agregar(AUTH, authData);
  }

  return {
    agregar,
  };
};
