import { Router } from "express";
const router = Router();
import { 
    getAllUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById
 } from "../../controllers/userController.js";

router.route("/")
.get(getAllUsers)
.post(createUser);

router.route("/:userId")
.get(getUserById)
.put(updateUserById)
.delete(deleteUserById);



export { router as userRoutes };