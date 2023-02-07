import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { CreateUserTDO } from "../../dtos/CreateUserTDO";

export class CreateUserUseCase {
  async execute({ data }: CreateUserTDO) {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email: data.email
      }
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    const user = await prisma.user.create({
      data,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        password: false,
        created_at: true,
        updated_at: true,
      }
    });

    return user;
  }
}