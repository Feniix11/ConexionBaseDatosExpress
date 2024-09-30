const db = require("../../DB/mysql");
const servicios = require("./servicios");

module.exports = servicios(db);
