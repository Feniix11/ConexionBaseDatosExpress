const Authen = require("../../authen");

module.exports = function verificarAuth() {
  function middleware(req, res, next) {
    Authen.chequearToken.confirmarToken(req);
    next(); // Continua si el token es válido
  }
  return middleware;
};
