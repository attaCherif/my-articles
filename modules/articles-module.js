const db = require("../data/dbConfig.js");
const comments = require("./comments-module.js");

module.exports = {
  find,
  findById,
  add,
  updateArticle,
  remove,
};

async function find() {
  const articles = await db("articles");
  const fullArticle = await Promise.all(
    articles.map((article) => findById(article.id))
  );
  return fullArticle;
}

async function findById(id) {
  const article = await db("articles").where({ id }).first();
  const commentsRelated = await db("comments").where({ article_id: id });
  const fullComments = await Promise.all(
    commentsRelated.map((comment) => comments.findById(comment.id))
  );
  return { ...article, comments: fullComments };
}

async function add(article) {
  const [id] = await db("articles").insert(article);
  return findById(id);
}

async function updateArticle(id, changes) {
  return await db("articles")
    .where({ id })
    .update(changes)
    .then((count) => (count > 0 ? articles.findById(id) : null));
}

async function findBy(id) {
  return await db("articles").where({ id }).first();
}

async function remove(id) {
  comments.removeComments(id);
  return db("articles").where({ id }).del();
}
