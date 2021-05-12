const express = require("express");
const db = require("../data/db-config");

const router = express.Router();

// get all articles
router.get("/", async (req, res) => {
  try {
    const articles = await db.find();
    return res
      .status(200)
      .json({ articles, message: "liste de tous les articles !" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Ce ne sont pas les articles que vous cherchez",
    });
  }
});

// get article by ID
router.get("/:id", async (req, res) => {
  try {
    const article = await db.findById(req.params.id);
    article
      ? res.status(200).json(article)
      : res.status(404).json({ error: "cet article n existe pas" });
  } catch (error) {
    res.status(500).json({
      error: "l article que vous cherchez n a pas pu etre récupéré.",
    });
  }
});

// post : add an article
router.post("/", async (req, res) => {
  try {
    const article = await db.insert(req.body);

    console.log(article);
    article
      ? res.status(201).json(article)
      : res.status(400).json({
          error:
            "veuillez à remplir tous les champs avant d ajouter un article.",
        });
  } catch (error) {
    res.status(500).json({
      error: "une erreur est survenu au moment d enregistrement de l article",
    });
  }
});

// edit article data
router.put("/:id", async (req, res) => {
  try {
    console.log("inside put");
    const articles = await db.update(req.params.id, req.body);
    articles
      ? res.status(200).json(articles)
      : res.status(404).json({ error: "article non existant" });
  } catch (error) {
    res.status(500).json({ error: "cet article n a pas été modifié" });
  }
});

module.exports = router;
