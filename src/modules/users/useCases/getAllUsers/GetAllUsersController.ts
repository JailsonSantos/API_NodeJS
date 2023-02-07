import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

export class GetAllUsersController {
  async handle(req: Request, res: Response) {

    const getAllUsersUseCase = new GetAllUsersUseCase();

    const result = await getAllUsersUseCase.execute();

    if (result.length > 0) {

      return res.status(201).json(result);
    } else {

      return res.status(200).json({
        status: "success",
        message: "List of Users empty."
      });
    }
  }
}