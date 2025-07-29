const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParsar = require("cookie-parser");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const { removeFromCart } = require("./controllers/cartController");
const orderRoutes = require("./routes/orderRoutes");

dotenv.config();
const app = express();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParsar());

app.get("/", (req, res) => {
  res.json({
    message: "Server is running",
  });
});

app.use("/", productRoutes);
app.use("/", cartRoutes);

app.use("/auth", authRoutes);

app.use("/orders", orderRoutes);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database connected");

    app.listen(3000, () => {
      console.log("Server is running in port 3000");
    });
  })
  .catch((error) => {
    console.log("Error connecting to database:", error.message);
  });
