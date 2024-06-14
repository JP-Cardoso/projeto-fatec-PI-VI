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
    console.log(data);
    const account = await AccountModel.update(
      { status: data.resposta == 'Digno de Crédito' ? "ATIVADO" : "DESATIVADO" },
      {
        where: {
          idConta: data.idConta
        }
      }
    );

    return account;
  }
}