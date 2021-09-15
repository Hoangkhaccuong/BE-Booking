import express from "express";
import homeController, { getAboutPage, getHomePage } from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/about',homeController.getAboutPage)
    router.get('/test',homeController.getHomePage)
    return app.use("/", router);
}

module.exports = initWebRoutes;