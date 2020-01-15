const express = require("express");
const app = express();

const companies = require("./api/companies");

const { connectDb } = require("./config/connectDatabase");

// connect to database
connectDb();

app.use(express.json());

// routes
app.use("/api/companies", companies);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
