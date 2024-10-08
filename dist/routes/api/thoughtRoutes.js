import { Router } from "express";
const router = Router();
import { getAllThoughts, createThought, getThoughtById } from "../../controllers/thoughtsController.js";
router.route("/")
    .get(getAllThoughts)
    .post(createThought);
router.route("/:thoughtId")
    .get(getThoughtById);
export { router as thoughtRoutes };
