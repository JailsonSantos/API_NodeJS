import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {

  async handle(req: Request, res: Response) {

    const updateUserUseCase = new UpdateUserUseCase();

    const { id } = req.params;

    const data = req.body;

    if (data.password !== undefined) {
      const hashPasswordUpdate = await bcrypt.hash(data.password, 10);
      data.password = hashPasswordUpdate;
    }

    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        id
      }
    });

    if (!userAlreadyExists) {
      throw new AppError("User not already exists!");
    }

    const user = await updateUserUseCase.execute(id, { data });

    return res.status(201).json(user);
  }

}