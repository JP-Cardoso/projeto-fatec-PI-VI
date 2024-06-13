import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  'your_database_name',
  'your_username',
  'your_password',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
)