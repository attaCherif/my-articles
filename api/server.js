const express = require("express");
const articlesRouter = require("../articles/articles-router");
const helmet = require("helmet");
const server = express();
server.use(express.json());
server.use("/api/articles", articlesRouter);
server.use(helmet());

server.get("/", (req, res) => {
  res.send("<h1> Welcome to the Articles Server </h1>");
});

module.exports = server;
