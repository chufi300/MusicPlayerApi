const { validationResult } = require("express-validator");

const validateResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next(); // CONTINUA HACIA EL CONTROLADOR
  } catch (err) {
    res.status(403);
    res.send({ errors: err.array() });
  }
};

module.exports = validateResults;
