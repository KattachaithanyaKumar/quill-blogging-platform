import { Sequelize } from "sequelize";

const sequelize = new Sequelize("blogging", "blogginguser", "Chaitu@1234", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
