const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const config = require("./config");

const auth = require("./models/Auth/rutas");
const clientes = require("./models/Clientes/rutas");
const usuarios = require("./models/Usuarios/rutas");

const { errors } = require("./red/errors");

let corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};

// MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// CONFIGURACION
app.set("port", config.app.port);

// RUTAS
app.use("/authenticar", auth);
app.use("/clientes", clientes);
app.use("/usuarios", usuarios);

app.use(errors);

module.exports = app;
