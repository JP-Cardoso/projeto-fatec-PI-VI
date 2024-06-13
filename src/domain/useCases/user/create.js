import { CreateUserService } from "../../services/user/create-service.js";

export class CreateUserUseCase {

  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(params) {
    const userService = new CreateUserService();
    const user = await userService.execute(params);
    return this.userRepository.save(user);
  }
}