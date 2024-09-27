const Auth = "Auth";

module.exports = function (dbInyectada) {
  let db = dbInyectada;

  if (!db) {
    db = require("../DB/mysql");
  }
  function todos() {
    return db.todos(USUARIOS);
  }

  function uno(id) {
    return db.uno(USUARIOS, id);
  }

  async function agregar(body) {
    const usuario = {
      id: body.id,
      nombre: body.nombre,
      activo: body.activo,
    };
    const respuesta = await db.agregar(USUARIOS, usuario);

    var insertId = "";

    console.log(respuesta.insertId);
    if (!body.id) {
      insertId = respuesta.insertId;
    } else {
      insertId = body.id;
    }

    let respuesta2 = "";

    if (body.usuario || body.password) {
      respuesta2 = await auth.agregar({
        id: respuesta.insertId,
        usuario: body.usuario,
        password: body.password,
      });
    }

    return respuesta2;
  }

  function eliminar(body) {
    return db.eliminar(USUARIOS, body);
  }

  return {
    todos,
    uno,
    agregar,
    eliminar,
  };
};
