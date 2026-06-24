import express from "express";
import dotenv from "dotenv";
import sequelize from "./database.js";
import cors from "cors";

import UserRoutes from "./routes/User.route.js";
import AuthRoutes from "./routes/Auth.route.js";

const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api/users", UserRoutes);
app.use("/api/auth", AuthRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

try {
  await sequelize.authenticate();
  console.log("Database connected");

  await sequelize.sync();
  console.log("Tables synchronized");

  app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
  });
} catch (err) {
  console.error(err);
}
