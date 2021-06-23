"use strict";

const logger = require("../utils/logger");

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "Template 1 Dashboard",
    };
    response.render("dashboard", viewData);
  },
  async addreport(request, response) {
    logger.info("rendering new report");
    const report = {};
    const viewData = {
      title: "Weather Report",
      reading : report
    };
    response.render("dashboard", viewData);
  },
};

module.exports = dashboard;
