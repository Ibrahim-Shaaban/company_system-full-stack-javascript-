const { validationResult } = require("express-validator");
const _ = require("lodash");
const Company = require("../models/Company");

const addCompany = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let { name, code, address } = req.body;

    // check if there is a company with the same address
    let company = await Company.findOne({ address });

    if (company) {
      return res
        .status(400)
        .json({ errors: [{ msg: "this address is already existed" }] });
    }

    // save new company in database

    let newCompany = await Company.create({ name, code, address });

    return res.json(_.pick(newCompany, ["_id", "code", "name", "address"]));

    // return the saved company
  } catch (error) {
    console.log(error);
    return res.status(500).json("internal server error");
  }
};

const editcompany = async (req, res) => {
  try {
    // check if company existed
    const companyId = req.params.id;

    let company = await Company.findById(companyId);
    if (!company) {
      return res
        .status(400)
        .json({ errors: [{ msg: "company is not found" }] });
    }
    // edit company and save it
    const { name, code, address } = req.body;
    let newCompany = await Company.findByIdAndUpdate(
      companyId,
      { name, code, address },
      { new: true }
    );

    // return the new company
    return res.json(_.pick(newCompany, ["_id", "code", "name", "address"]));
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res
        .status(400)
        .json({ errors: [{ msg: "companyId is not valid" }] });
    }
    return res.status(500).json("internal server error");
  }
};

const deleteCompany = async (req, res) => {
  try {
    // check if company existed
    const companyId = req.params.id;

    let company = await Company.findById(companyId);
    if (!company) {
      return res
        .status(400)
        .json({ errors: [{ msg: "company is not found" }] });
    }

    // check if company is already deleted
    if (!company.isActive) {
      return res
        .status(400)
        .json({ errors: [{ msg: "company is already deleted" }] });
    }
    // edit company and save it

    let newCompany = await Company.findByIdAndUpdate(
      companyId,
      { isActive: false },
      { new: true }
    ).select("-isActive");

    // return the new company
    return res.json(newCompany);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res
        .status(400)
        .json({ errors: [{ msg: "companyId is not valid" }] });
    }
    return res.status(500).json("internal server error");
  }
};

const getCompany = async (req, res) => {
  try {
    // check if company existed
    const companyId = req.params.id;

    let company = await Company.findById(companyId);
    if (!company) {
      return res
        .status(400)
        .json({ errors: [{ msg: "company is not found" }] });
    }

    // check if company is active
    if (!company.isActive) {
      return res
        .status(400)
        .json({ errors: [{ msg: "company is no longer acive" }] });
    }

    return res.json(_.pick(company, ["_id", "code", "name", "address"]));
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res
        .status(400)
        .json({ errors: [{ msg: "companyId is not valid" }] });
    }
    return res.status(500).json("internal server error");
  }
};

const getCompanies = async (req, res) => {
  try {
    const allCompanies = await Company.find({ isActive: true }).select(
      "-isActive"
    );
    return res.json(allCompanies);
  } catch (error) {
    return res.status(500).json("internal server error");
  }
};

module.exports = {
  addCompany,
  editcompany,
  deleteCompany,
  getCompany,
  getCompanies
};
