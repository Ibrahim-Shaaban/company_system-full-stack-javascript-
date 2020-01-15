const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true,
    unique: true
  },
  isActive: {
    type: Boolean,
    default: true,
    index: true
  }
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
