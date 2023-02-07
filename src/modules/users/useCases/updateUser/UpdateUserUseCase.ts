import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { UpdateUserTDO } from "../../dtos/UpdateUserTDO";

export class UpdateUserUseCase {

  async execute(id: string, { data }: UpdateUserTDO) {

    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        id
      }
    });

    if (!userAlreadyExists) {
      throw new AppError("User not already exists!");
    }

    const userUpdated = await prisma.user.update({
      where: {
        id
      },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
        phone: true,
        created_at: true,
        updated_at: true,
      }
    });
    return userUpdated;
  }
}