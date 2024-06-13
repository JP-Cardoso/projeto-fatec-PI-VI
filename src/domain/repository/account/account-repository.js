import { AccountModel } from "../../../infra/config/mysql/account/Account-Model.js";

export class AccountRepository {

  async save(data) {
    await AccountModel.create(data);
  }

  async getAccountByUserId(id) {
    const account = await AccountModel.findOne(
      {
        where: {
          idDoCliente: id
        }
      }
    );

    return account;
  }

  async updatedById(data) {
    const account = await AccountModel.update(
      { status: data.resultado },
      {
        where: {
          idConta: data.id
        }
      }
    );

    return account;
  }
}