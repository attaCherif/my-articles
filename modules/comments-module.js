const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  add,
  removeComments,
};

async function find() {
  const comments = await db("comments");
  var fullComments = [];
  for (i = 0; i < comments.length; i++) {
    const comment = await findById(comments[i].id);
    fullComments.push(comment);
  }
  return fullComments;
}

async function findById(id) {
  return await db("comments").where({ id }).first();
}

async function add(comment) {
  const [id] = await db("comments").insert(comment);
  return findById(id);
}

async function removeComments(article_id) {
  return await db("comments").where({ article_id: article_id }).del();
}
