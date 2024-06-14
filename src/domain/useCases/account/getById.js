export class GetAccountByID {

  constructor(repository) {
    this.repository = repository
  }

  async execute(id) {
    const account = await this.repository.getAccountByUserId(id);
    if (!account) {
      throw new Error("Conta não encontrada");
    }
    return account;
  }
} 