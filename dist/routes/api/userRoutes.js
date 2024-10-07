import { Router } from "express";
const router = Router();
import { getAllUsers, createUser } from "../../controllers/userController.js";
router.route("/").get(getAllUsers).post(createUser);
export { router as userRoutes };
