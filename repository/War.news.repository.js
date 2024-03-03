const War_newsModel = require("../model/war.news.model.js");
exports.warNewsRepository = {
  getWar_news: async () => {
    return await War_newsModel.find({});
  },
  getWar_newsById: async (id) => {
    return await War_newsModel.findById({ _id: id });
  },
  createWar_news: async (news) => {
    return await War_newsModel.create(news);
  },
  updateWar_news: async (id, news) => {
    return await War_newsModel.findByIdAndUpdate({ _id: id }, news);
  },
  deleteWar_news: async (id) => {
    return await War_newsModel.findByIdAndDelete({ _id: id });
  },
};
