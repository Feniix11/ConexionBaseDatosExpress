const express = require("express");
const respuesta = require("../../red/respuesta");
// const index = require("./index");
const controlador = require("./controlador");
const seguridad = require("./seguridad");

const router = express.Router();

router.get("/", controlador.todos);
router.get("/:id", uno);
router.post("/create", seguridad(), agregar);
router.put("/", seguridad(), eliminar);

// async function todos(req, res, next) {
//   try {
//     const items = await index.todos();
//     respuesta.success(req, res, items, 200);
//   } catch (error) {
//     next(error);
//   }
// }

async function uno(req, res, next) {
  try {
    const items = await controlador.uno(req.params.id);
    respuesta.success(req, res, items, 200);
  } catch (error) {
    next(error);
  }
}

async function eliminar(req, res, next) {
  try {
    const items = await controlador.eliminar(req.body);
    respuesta.success(req, res, "Item eliminado correctamente", 200);
  } catch (error) {
    next(error);
  }
}

async function agregar(req, res, next) {
  try {
    const items = await controlador.agregar(req.body);
    console.log(req.body.id);
    if (!req.body.id) {
      mensaje = "Item guardado con exito";
    } else {
      mensaje = "Item actualizado con exito";
    }
    respuesta.success(req, res, mensaje, 201);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
