import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { userCreateValidation } from "../../../../validations/userCreate";

export class CreateUserController {
  async handle(req: Request, res: Response) {

    const createUserUseCase = new CreateUserUseCase();

    const data = req.body;

    await userCreateValidation.validate(data);

    if (data.password !== undefined) {
      const hashPasswordUpdate = await bcrypt.hash(data.password, 10);
      data.password = hashPasswordUpdate;
    }

    const result = await createUserUseCase.execute({ data });

    return res.status(201).json(result);
  }
}