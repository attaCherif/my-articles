const express = require("express");
const cors = require("cors");

const server = express();
const articlesRoutes = require("./routes/articles-routes.js");
server.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
server.use(cors(corsOptions));

server.use("/api/articles", articlesRoutes);

server.get("/", (req, res) => {
  res.send("Woof Woof! We Out the Pound!");
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`\n Running on port ${port}\n`));
