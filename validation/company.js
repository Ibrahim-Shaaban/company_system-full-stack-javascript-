const { check } = require("express-validator");

const addCompanyValidation = [
  check("name", "name is required").isLength({
    min: 3
  }),
  check("code", "code is required").notEmpty(),
  check("address", "address is required").notEmpty()
];

module.exports = { addCompanyValidation };
