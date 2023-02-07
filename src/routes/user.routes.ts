import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { UpdateUserController } from "../modules/users/useCases/updateUser/UpdateUserController";
import { DeleteUserController } from "../modules/users/useCases/deleteUser/DeleteUserController";
import { GetAllUsersController } from "../modules/users/useCases/getAllUsers/GetAllUsersController";
import { GetUserByIdController } from "../modules/users/useCases/getByUserForId/GetUserByIdController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const getUserByIdController = new GetUserByIdController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);
userRoutes.get("/:id", getUserByIdController.handle);
userRoutes.put("/:id", updateUserController.handle);
userRoutes.delete("/:id", deleteUserController.handle);

export { userRoutes };