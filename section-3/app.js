import * as http from "http";
import * as fs from "fs";

import {
  TEST_HTML,
  TEST_FORM_HTML,
  STATUS_CODES,
  PORT,
} from "./constants/index.js";

const renderHtml = (res, html) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(html);
};

const writeOutput = (value, callback) => {
  fs.mkdirSync("./outputs", { recursive: true });
  fs.writeFile("./outputs/value.txt", value, { recursive: true }, callback);
};

const requestListener = (req, res) => {
  const { url, method } = req;

  console.log(method, url);

  if (url === "/") {
    renderHtml(res, TEST_FORM_HTML);
    return;
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log("CHUNK:", chunk);
      body.push(chunk);
    });

    return req.on("end", (chunk) => {
      console.log("END CHUNK:", chunk);

      const parsedBody = Buffer.concat(body).toString();
      console.log("END PARSED BODY:", parsedBody);

      const value = parsedBody.split("=")[1];
      writeOutput(value, () => {
        res.statusCode = STATUS_CODES.FOUND;
        res.setHeader("Location", "/");
        res.end();
      });
    });
  }

  renderHtml(res, TEST_HTML);
};

const server = http.createServer(requestListener);

server.listen(PORT);
