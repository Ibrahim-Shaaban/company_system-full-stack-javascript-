const express = require("express");
const router = express.Router();

const {
  addCompany,
  editcompany,
  deleteCompany,
  getCompany,
  getCompanies
} = require("../controllers/company");
const { addCompanyValidation } = require("../validation/company");

// add new company
router.post("/", addCompanyValidation, addCompany);

// edit existing company
router.put("/:id", addCompanyValidation, editcompany);

// delete exisitng company by id
router.delete("/:id", deleteCompany);

// get exisitng company by id
router.get("/:id", getCompany);

// get all companies
router.get("/", getCompanies);

module.exports = router;
