export class GetAllUserUseCase {

  constructor(repository) {
    this.repository = repository;
  }

  async execute() {
    const users = await this.repository.getAll();
    return users;
  }

}