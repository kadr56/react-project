const { request, response } = require("express");
const express = require("express");
const Menu = require("../models/Menu");

const Router = express.Router();

Router.get("/all", async (request, response) => {
  const parentMenus = await Menu.find({});
  response.status(200).send(parentMenus);
});

Router.post("/add", async (request, response) => {
  const body = request.body;
  console.log(body);
  response.status(200).send({ data: body });
});
module.exports = Router;
