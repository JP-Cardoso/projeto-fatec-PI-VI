import { UserModel } from "../../../infra/config/mysql/user/user-model.js";

export class UserRepository {

  async save(params) {
    const user = await UserModel.create(params);
    return user;
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