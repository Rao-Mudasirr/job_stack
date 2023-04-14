const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://jobs.orcaloholding.co.uk",
      changeOrigin: true,
    })
  );
};
