import { Sequelize } from "sequelize";
import mysql2 from 'mysql2'
import dotenv from 'dotenv';
dotenv.config();

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
    dialect: 'mysql',
    dialectModule: require(mysql2)
  }

)