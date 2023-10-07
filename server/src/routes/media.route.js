import express from "express";
import mediaController from "../controllers/media.controller.js";

const router = express.Router({ mergeParams: true });

router.get("/search", mediaController.search);

router.get("/genres", mediaController.getAllGenres);

router.get("/detail/:mediaId", mediaController.receiveDetail);

router.get("/:mediaCategory", mediaController.receiveList );

export default router;