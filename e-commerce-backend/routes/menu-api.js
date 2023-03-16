const express = require("express");
const Router = express.Router();
const Menu = require("../models/Menu");

Router.get("/all", async (request, response) => {
  const parentMenus = await Menu.find({});

  // console.log(result);
  response.status(200).send(parentMenus);
});

Router.post("/add", async (req, res) => {
  const body = req.body;
  console.log(body);
  const newMenu = new Menu(body);
  const result = newMenu.save();

  res.status(200).send({ data: result });
});

module.exports = Router;
