const AUTH = "Auth";
const authen = require("../../authen");
const bcrypt = require("bcrypt");

module.exports = function (db) {
  if (!db) {
    db = require("../../DB/mysql");
  }

  // Comparacion de contraseñas encriptadas
  async function login(usuario, password) {
    const data = await db.query(AUTH, { usuario: usuario });

    return bcrypt.compare(password, data.password).then((resultado) => {
      if (resultado == true) {
        //Generar token
        return authen.asignarToken({ ...data });
      } else {
        throw new Error("Informacion invalida");
      }
    });
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
    login,
  };
};
