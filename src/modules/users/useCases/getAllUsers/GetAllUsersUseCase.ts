import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class GetAllUsersUseCase {
  async execute() {
    const users = await prisma.user.findMany({
      orderBy: {
        created_at: "desc"
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        created_at: true,
        updated_at: true,
      }
    });

    if (!users) {
      throw new AppError("List of users not exists!");
    }

    return users;
  }
}