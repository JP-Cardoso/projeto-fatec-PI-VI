import jwt from 'jsonwebtoken';
import { compare } from 'bcrypt'

export class AuthService {
  async execute(password, user) {
    const isValidPassword = await compare(password, user.password);
    console.log(isValidPassword);

    if (!isValidPassword) {
      console.log('opa');
      throw new Error("invalid data");
    }
    const token = jwt.sign(
      { id: user.id },
      "68e47484c1554726a9557b76c79ad7d3",
      { expiresIn: "1d" }
    )

    return token;
  }
}