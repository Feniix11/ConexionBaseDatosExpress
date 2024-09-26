const express = require("express");
const respuesta = require("../red/respuesta");
const controlador = require("./controlador");

const router = express.Router();

const users = "Users";

router.get("/", function (req, res) {
  const todos = controlador.todos(users).then((items) => {
    respuesta.success(req, res, items, 200);
  });
});

module.exports = router;
