import { Router } from "express";
const router = Router();
import {
    getAllThoughts,
    createThought,
    getThoughtById,
    updateThoughtById,
    deleteThoughtById,
    addReaction,
    removeReaction
} from "../../controllers/thoughtsController.js";

router.route("/")
.get(getAllThoughts)
.post(createThought);

router.route("/:thoughtId")
.get(getThoughtById)
.put(updateThoughtById)
.delete(deleteThoughtById);

router.route("/:thoughtId/reactions")
.post(addReaction);

router.route("/:thoughtId/reactions/:reactionId")
.delete(removeReaction);



export { router as thoughtRoutes };