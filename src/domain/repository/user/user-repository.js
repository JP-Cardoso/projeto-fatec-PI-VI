import { AccountModel } from "../../../infra/config/mysql/account/Account-Model.js";
import { sequelize } from "../../../infra/config/mysql/database-config.js";
import { UserModel } from "../../../infra/config/mysql/user/user-model.js";

export class UserRepository {

  async save(params) {
    const transaction = await sequelize.transaction();

    try {
      const user = await UserModel.create(params);
      console.log(user.dataValues.id);
      const userId = user.dataValues.id;
      const data = {
        idDoCliente: userId, 
        saldo: 5000,
        agencia: 1234
      }
      await AccountModel.create(data)
      await transaction.commit();
    } catch (error) {
      console.log(error);
      await transaction.rollback();
      throw new Error("Erro ao criar conta")
    }
  }

  async findOne(email) {
    const user = await UserModel.findOne(
      {
        where: {
          email
        }
      }
    );

    return user;
  }

  async getAll() {
    const users = await UserModel.findAll();
    if (!users) {
      return [];
    }
    return users;
  }

  async findOneByPk(id) {
    const user = await UserModel.findByPk(id);
    return user;
  }

  async update(obj, id) {
    const { nome, email } = { ...obj };
    const result = await UserModel.update(
      { nome, email }, {
      where: {
        id
      }
    });
    return result;
  }

}