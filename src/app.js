const express = require("express");
const morgan = require("morgan");
const app = express();
const config = require("./config");
const users = require("./routes/rutas");
// const fs = require("fs");

// app.use(express.json());

// MIDDLEWARE
app.use(morgan("dev"));

// CONFIGURACION
app.set("port", config.app.port);

// RUTAS
app.use("/users", users);

module.exports = app;

// app.post("/create", (req, res) => {
//   console.log(req);
//   // Guardo las propiedades que sé que llegaran
//   const { id, name } = req.body;

//   // Verficio que lleguen
//   console.log("id: " + id);

//   // Los guardo en un objeto
//   const respuesta = { id: id, name: name };

//   // Agrego mi respuesta a los usuarios existentes
//   users.push(respuesta);

//   // Confirmo la operacion
//   res.json({ ok: true });
// });

// app.post("/create/fs", (req, res) => {
//   // Guardo las propiedades que sé que llegaran
//   const { id, name } = req.body;

//   // Los guardo en un objeto
//   const respuesta = { id: id, name: name };

//   // Agrego mi respuesta a los usuarios existentes
//   users.push(respuesta);

//   let usersString = JSON.stringify(users);

//   fs.writeFile("users.json", usersString, (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("Contenido reemplazado exitasamente");
//   });
//   // Confirmo la operacion
//   res.json({ ok: true });
// });

// app.get("/user/:id", (req, res) => {
//   res.send(`El id es: ${req.params.id}`);
// });

// app.get("/about", (req, res) => {
//   res.send("About");
// });

// app.get("/contact", (req, res) => {
//   res.send("Contact");
// });

//Como parcear un JSON en EXPRES con un Middleware?
