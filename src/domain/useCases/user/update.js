export class UpdateUserUseCase {

  constructor(repository) {
    this.repository = repository;
  }

  async execute(userData) {
    const { id, nome, email, password } = userData;
    const user = await this.repository.findOneByPk(id);
    if (!user) {
      throw new Error({ error: "User not found" });
    }
    const newUser = {
      nome, email
    }
    const result = await this.repository.update(newUser, id);
    return result;
  }
}