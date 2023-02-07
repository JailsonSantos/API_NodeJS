import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class GetUserByIdUseCase {

  async execute(id: string) {

    const user = await prisma.user.findUnique({
      where: {
        id
      },
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

    if (!user) {
      throw new AppError("User not exists!");
    }

    return user;
  }
}