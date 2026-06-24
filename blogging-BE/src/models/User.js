import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  banner: {
    type: DataTypes.STRING,
  },
  bio: {
    type: DataTypes.TEXT,
  },
});

export default User;
