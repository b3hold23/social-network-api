import { Router } from "express";
const router = Router();
import {
    getAllThoughts,
    createThought
} from "../../controllers/thoughtsController.js";

router.route("/")
.get(getAllThoughts)
.post(createThought);

export { router as thoughtRoutes };