import { CreateAccountUseCase } from "../../../../domain/useCases/account/create.js";
import { AccountRepository } from "../../../../domain/repository/account/account-repository.js"
import { GetAccountByID } from "../../../../domain/useCases/account/getById.js";

export class AccountController {

  async create(req, res) {
    try {
      const data = req.body;
      const createAccountRepository = new AccountRepository();
      const createAccountUseCase = new CreateAccountUseCase(createAccountRepository);
      const result = await createAccountUseCase.execute(data);
      res.status(201).send({ msg: "Conta criada com sucesso!" });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }


  async getByID(req, res) {
    try {
      const { id } = req.params;
      const accountRepository = new AccountRepository();
      const getAccountUserByIdUseCase = new GetAccountByID(accountRepository);
      const result = await getAccountUserByIdUseCase.execute(id);
      res.status(200).send(result)
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
}