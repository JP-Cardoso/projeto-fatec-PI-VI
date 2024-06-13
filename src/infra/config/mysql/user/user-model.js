import { DataTypes } from "sequelize";
import { sequelize } from "../database-config.js";

export const UserModel = sequelize.define(
  'cliente', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(255),
    allownull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allownull: false
  },
  cpf: {
    type: DataTypes.STRING(11),
    allownull: true
  },
  password: {
    type: DataTypes.STRING(255),
    allownull: false
  },
}, {
  tableName: 'cliente',
  timestamps: false
});