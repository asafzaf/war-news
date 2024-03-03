const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const newsRouter = require("../routers/war.news.router");
const morgan = require("morgan");
const cors = require("cors");

app.use(morgan("dev"));
app.use(express.json());

app.use(cors());

app.use("/news", newsRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

const server = app.listen(port, () => {
    process.env.NODE_ENV === "test"
    ? null
    : console.log(`Server is running on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Rejection! Shutting down...");
  serv.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Uncaught Exception! Shutting down...");
  serv.close(() => {
    process.exit(1);
  });
});

module.exports = app;
