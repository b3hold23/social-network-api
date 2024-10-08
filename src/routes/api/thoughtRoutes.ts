import { Router } from "express";
const router = Router();
import {
    getAllThoughts
} from "../../controllers/thoughtsController.js";

router.route("/")
.get(getAllThoughts);

export { router as thoughtRoutes };