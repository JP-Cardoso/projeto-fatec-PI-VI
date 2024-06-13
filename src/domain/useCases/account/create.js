import { AccountService } from "../../services/account/account-service.js";

export class CreateAccountUseCase {

  constructor(repository) {
    this.repository = repository;
  }

  async execute(data) {
    const accountExistis = await this.repository.getAccountByUserId(data.id);
    if (accountExistis) {
      throw new Error("Conta já existente");
    }
    const formatData = AccountService.formater(data);
    const result = await this.repository.save(formatData);
    return result;
  }

  async updated(data) {
    const result = await this.repository.updatedById()
  }
}