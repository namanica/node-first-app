import * as http from "http";

import {
  PORT,
  GREETING_HTML,
  DUMMY_USERS_LIST_HTML,
} from "./constants/index.js";

import { renderHtml } from "./helpers/index.js";

const requestListener = (req, res) => {
  const { url, method } = req;

  console.log(method, url);

  if (url === "/") {
    renderHtml(res, GREETING_HTML);
    return;
  }

  if (url === "/create-user") {
    const body = [];

    req.on("data", (chunk) => {
      console.log("CHUNK:", chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const value = parsedBody.split("=")[1];

      console.log(value);
    });
  }

  renderHtml(res, DUMMY_USERS_LIST_HTML);
};

const server = http.createServer(requestListener);

server.listen(PORT);
