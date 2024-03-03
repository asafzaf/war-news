const express = require("express");
const newsController = require("../controllers/war.news.controller");
const router = express.Router();

router
  .route("/")
  .get(newsController.getAllNews)
  .post(newsController.createNews);
router
  .route("/:id")
  .get(newsController.getNewsById)
  .put(newsController.updateNews)
  .delete(newsController.deleteNews);
