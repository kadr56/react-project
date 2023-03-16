const express = require("express");
const ProductCategory = require("../models/ProductCategory");

const Router = express.Router();

Router.get("/categories", async (req, res) => {
  const categories = await ProductCategory.find({});
  res.status(200).send({ data: categories });
});

Router.post("/category/add", async (req, res) => {
  const body = req.body;
  console.log(body);
  const category = new ProductCategory();
  category.product_category_name = body.categoryName;
  category.product_category_description = body.categoryDescription;

  const savedCategory = await category.save();

  res.status(200).send({ data: savedCategory });
});

module.exports = Router;
