const router = require("express").Router();

const articles = require("../modules/articles-module.js");
const comments = require("../modules/comments-module.js");

// get all articles and all comments relater to each one
router.get("/", (req, res) => {
  articles
    .find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get articles", error: err });
    });
});

// get an article by it's ID
router.get("/:id", (req, res) => {
  articles
    .findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get article", error: err });
    });
});

// post a new article
router.post("/", (req, res) => {
  const article = req.body;
  articles
    .add(article)
    .then((data) => res.status(201).json(data))
    .catch((err) => {
      res.status(500).json(err);
    });
});

// post a new comment related to an existant article
router.post("/comment/", (req, res) => {
  const comment = req.body;
  comments
    .add(comment)
    .then((data) => res.status(201).json(data))
    .catch((err) => {
      res.status(500).json(err);
    });
});

// edit an existant article
router.put("/:id", (req, res) => {
  const changes = req.body;
  articles
    .updateArticle(req.params.id, changes)
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      res.status(500).json(err);
    });
});

// delete an existant article with all related comments
router.delete("/:id", (req, res) => {
  articles
    .remove(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
