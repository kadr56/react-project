console.log("iShop E-commerce backend");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const menuApi = require("./routes/menu-api");
const AdminApi = require("./routes/admin-api");

const app = express();

const PORT = 8081;
const MONGODB_CONNECTION_STRING =
  "mongodb+srv://Munkhbaatar:80601174Kadr@mymongodb.rjfahqr.mongodb.net/ishop";

app.use(cors());
app.use(express.json());
app.use("/menu", menuApi);
app.use("/admin", AdminApi);

app.listen(PORT, () => {
  mongoose
    .connect(MONGODB_CONNECTION_STRING)
    .then(console.log("Database successfully connected"))
    .catch((error) => console.log(error));

  console.log(
    `iShop E-commerce application is running on http://localhost:${PORT}`
  );
});
