import { Router } from "express";
const router = Router();
import { 
    getAllUsers,
    createUser,
    getUserById
 } from "../../controllers/userController.js";

router.route("/").get(getAllUsers).post(createUser);

router.route("/:userId").get(getUserById);

export { router as userRoutes };