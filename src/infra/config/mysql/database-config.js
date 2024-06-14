import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

if (options.dialect === 'mysql') {
  options.dialectModule = mysql2;
}

const database = process.env.DB_DATABASE;
const host = process.env.DB_HOST;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;
export const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    host: host,
    port: 3306,
    dialect: 'mysql'
  }
)