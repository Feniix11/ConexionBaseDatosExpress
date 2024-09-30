const auth = require("../Auth");
const servicios = require("./servicios");
const respuesta = require("../../red/respuesta");

async function todos(req, res, next) {
  try {
    const items = await servicios.todos();
    respuesta.success(req, res, items, 200);
  } catch (error) {
    next(error);
  }
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

module.exports = {
  todos,
  uno,
  agregar,
  eliminar,
};
