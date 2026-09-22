const http = require("http");

const { testHtml, testFormHtml } = require("./constants");

const renderHtml = (res, html) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(html);
};

const requestListener = (req, res) => {
  // console.log("REQUEST:", req);
  // console.log("RESPONSE:", res);
  console.log(req.method, req.url);

  if (req.url === "/") {
    renderHtml(res, testFormHtml);
    return;
  }

  renderHtml(res, testHtml);
};

const server = http.createServer(requestListener);

server.listen(3000);
