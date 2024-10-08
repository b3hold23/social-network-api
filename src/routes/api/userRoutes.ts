import { Router } from "express";
const router = Router();
import { 
    getAllUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById,
    getAllFriends,
    addAFriend,
    removeAFriend
 } from "../../controllers/userController.js";

router.route("/")
.get(getAllUsers)
.post(createUser);

router.route("/:userId")
.get(getUserById)
.put(updateUserById)
.delete(deleteUserById);

router.route("/:userId/friends")
.get(getAllFriends)
.post(addAFriend);

router.route("/:userId/friends/remove")
.delete(removeAFriend);



export { router as userRoutes };