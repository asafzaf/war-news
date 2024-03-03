const catchAsync = require("../utils/catch.async");
const { warNewsRepository } = require("../repository/War.news.repository");
const { ServerError, NotFoundError, BadRequestError } = require("../errors/errors");

exports.getAllNews = catchAsync(async (req, res) => {
  const news = await warNewsRepository.getWar_news();

  if (!news) {
    return next(new BadRequestError("data"));
  }
  if (news.length === 0) {
    return next(new NotFoundError("news"));
  }
  res.status(200).json({
    news,
  });
});

exports.getNewsById = catchAsync(async (req, res) => {
  if (!req.params.id) {
    return next(new BadRequestError("id"));
  }

  const news = await warNewsRepository.getWar_newsById(req.params.id);
  if (!news) {
    return res.status(404).json({
      status: "fail",
      message: "No news found with that ID",
    });
  }

  res.status(200).json({
    news,
  });
});

exports.createNews = catchAsync(async (req, res) => {
  if (!validator(req.body)) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid data sent!",
    });
  }

  const news = await warNewsRepository.createWar_news(req.body);

  res.status(201).json({
    news,
  });
});

exports.updateNews = catchAsync(async (req, res) => {
  if(!req.params.id) {
    return next(new BadRequestError("id"));
  }

  const news = await warNewsRepository.updateWar_news(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    news,
  });
});

exports.deleteNews = catchAsync(async (req, res) => {
  if (!req.params.id) {
    return next(new BadRequestError("id"));
  }
  const news = "Delete news";

  await warNewsRepository.deleteWar_news(req.params.id);

  res.status(204).json({
    data: null,
    message: "News deleted",
  });
});

const validator = (body) => {
  if (!body.title || !body.description || !body.text || !body.author) {
    return false;
  }
  return true;
};
