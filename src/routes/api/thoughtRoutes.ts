import { Router } from "express";
const router = Router();
import {
    getAllThoughts,
    createThought,
    getThoughtById,
    updateThoughtById,
    deleteThoughtById
} from "../../controllers/thoughtsController.js";

router.route("/")
.get(getAllThoughts)
.post(createThought);

router.route("/:thoughtId")
.get(getThoughtById)
.put(updateThoughtById)
.delete(deleteThoughtById);

export { router as thoughtRoutes };