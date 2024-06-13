import { hash } from "bcrypt";

export class CreateUserService {

  async execute(params) {

    const { nome, email, password } = params;

    if (!email) {
      throw new Error("Email incorrect");
    }
    if (!nome) {
      throw new Error("Name incorrect");
    }
    if (!password) {
      return new Error("Password incorrect");
    }

    const newPassword = await this.hashPassword(password);
    const user = {
      nome,
      email,
      password: newPassword
    }

    return user;
  }

  async hashPassword(password) {
    return await hash(password, 8);
  }

}