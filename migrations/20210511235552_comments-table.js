exports.up = function (knex, Promise) {
  return knex.schema.createTable("comments", function (tbl) {
    tbl.increments("id").primary();
    tbl
      .integer("article_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("articles");
    tbl.string("comment_content", 255);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("comments");
};
