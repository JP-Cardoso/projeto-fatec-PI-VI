import { CreateAccountUseCase } from "../../../../domain/useCases/account/create.js";
import { AccountRepository } from "../../../../domain/repository/account/account-repository.js"

export class AccountController {

  async create(req, res) {
    try {
      const data = req.body;
      console.log(data);
      const createAccountRepository = new AccountRepository();
      const createAccountUseCase = new CreateAccountUseCase(createAccountRepository);
      const result = await createAccountUseCase.execute(data);
      res.status(201).send({ msg: "Conta criada com sucesso!" });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async updated(req, res) {
    try {

    } catch (error) {

    }
  }
}