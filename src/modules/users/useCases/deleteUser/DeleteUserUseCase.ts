import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class DeleteUserUseCase {

  async execute(id: string) {

    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        id
      }
    });

    if (!userAlreadyExists) {
      throw new AppError("User not already exists!");
    }

    await prisma.user.delete({
      where: {
        id
      },
    });
  }
}