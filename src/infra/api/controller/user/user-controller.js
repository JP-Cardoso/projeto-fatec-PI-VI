import { UserRepository } from "../../../../domain/repository/user/user-repository.js";
import { CreateUserUseCase } from "../../../../domain/useCases/user/create.js";
import { GetAllUserUseCase } from "../../../../domain/useCases/user/getAll.js";
import { UpdateUserUseCase } from "../../../../domain/useCases/user/update.js";

export class UserController {

  async handle(req, res) {
    try {
      const { nome, email, password } = req.body;
      const userRepository = new UserRepository();
      const createUserUseCase = new CreateUserUseCase(userRepository);
      const user = await createUserUseCase.execute({ nome, email, password });
      res.status(201).send({ msg: "usuário cadastrado com sucesso" });
    } catch (error) {
      console.log("ERROR7", error.message);
      res.status(500).send({ msg: "Erro interno" });
    }

  }

  async getAll(req, res) {
    try {
      const userRepository = new UserRepository();
      const getAllUsersUseCase = new GetAllUserUseCase(userRepository);
      const data = await getAllUsersUseCase.execute();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send({ msg: "Erro interno" });
    }

  }

  async update(req, res) {
    try {
      const id = req.params.id
      const client = req.body;
      const obj = { id, ...client };
      const userRepository = new UserRepository();
      const updateUserUseCase = new UpdateUserUseCase(userRepository);
      const result = await updateUserUseCase.execute(obj);
      res.status(200);
    } catch (error) {
      res.status(500).send({ msg: "Erro interno" });
    }

  }

}