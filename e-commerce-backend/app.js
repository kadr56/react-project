console.log("iShop E-Commerce Backend");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const menuApi = require("./routes/menu-api");
const adminApi = require("./routes/admin-api");

const app = express();
const PORT = 8009;

const MONGODB_CONNECTION_STRING =
  "mongodb+srv://Tush1gee2:I4uqKIqXxHmtwtPx@cluster0.ifpf7qh.mongodb.net/?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());
app.use("/menu", menuApi);
app.use("/admin", adminApi);

app.listen(PORT, () => {
  mongoose
    .connect(MONGODB_CONNECTION_STRING)
    .then(console.log(" Database амжилттай холбогдсон 🟢 "))
    .catch((error) => console.log(error));
  console.log(
    `iShop E-Commerce application running on http://localhost:${PORT}`
  );
});
