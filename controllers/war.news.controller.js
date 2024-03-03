const catchAsync = require("../utils/catchAsync");

exports.getAllNews = catchAsync(async (req, res) => {
  // get from database
  // const news = await News.find();
  const news = "All news";

  res.status(200).json({
    ...news,
  });
});

exports.getNewsById = catchAsync(async (req, res) => {
  const news = "News by ID";

  // const news = await News.findById(req.params.id);
  // if (!news) {
  // return res.status(404).json({
  //     status: "fail",
  //     message: "No news found with that ID",
  // });
  // }

  res.status(200).json({
    ...news,
  });
});

exports.createNews = catchAsync(async (req, res) => {
  const news = "Create news";

  // const news = await News.create(req.body);

  res.status(201).json({
    ...news,
  });
});

exports.updateNews = catchAsync(async (req, res) => {
  const news = "Update news";

  // const news = await News.findByIdAndUpdate(req.params.id
  //     , req.body, {
  //     new: true,
  //     runValidators: true,
  // });

  res.status(200).json({
    ...news,
  });
});

exports.deleteNews = catchAsync(async (req, res) => {
  const news = "Delete news";

  // await News.findByIdAndDelete(req.params.id);

  res.status(204).json({
    data: null,
  });
});
