const express = require("express");
const server = express();
const articlesRoutes = require("./routes/articles-routes.js");
server.use(express.json());

server.use("/api/articles", articlesRoutes);

server.get("/", (req, res) => {
  res.send("Woof Woof! We Out the Pound!");
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`\n Running on port ${port}\n`));
