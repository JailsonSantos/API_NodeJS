import { Request, Response } from "express";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const deleteUserUseCase = new DeleteUserUseCase();

    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        id
      }
    });

    if (!userAlreadyExists) {
      throw new AppError("User not already exists!");
    }

    await deleteUserUseCase.execute(id);

    return res.status(200).json({
      status: "success",
      message: "User deleted witch Success."
    });
  }

}