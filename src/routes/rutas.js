const express = require("express");
const respuesta = require("../red/respuesta");
const controlador = require("./controlador");

const router = express.Router();

router.get("/", todos);
router.get("/:id", uno);
router.get("/", eliminar);

async function todos(req, res) {
  try {
    const items = await controlador.todos();
    respuesta.success(req, res, items, 200);
  } catch (error) {
    respuesta.error(req, res, error, 500);
  }
}

async function uno(req, res) {
  try {
    const items = await controlador.uno(req.params.id);
    respuesta.success(req, res, items, 200);
  } catch (error) {
    respuesta.error(req, res, error, 500);
  }
}

async function uno(req, res) {
  try {
    const items = await controlador.uno(req.params.id);
    respuesta.success(req, res, items, 200);
  } catch (error) {
    respuesta.error(req, res, error, 500);
  }
}
module.exports = router;
