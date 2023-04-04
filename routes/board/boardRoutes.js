const express = require("express");
const boardControllers = require("../../controllers/boards");
const routes = express.Router();

routes.post("/createboard", boardControllers.createBoards);
routes.get("/getboards", boardControllers.getAllBoards);
// routes.get("/getCompanyById/:id", companyControllers.getCompanyById);
// routes.patch("/updateCompany/:id", companyControllers.updateCompany);
// routes.delete("/deleteCompany/:id", companyControllers.deleteCompany);

module.exports = routes;