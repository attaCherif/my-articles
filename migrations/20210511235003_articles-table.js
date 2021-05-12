exports.up = function (knex, Promise) {
  return knex.schema.createTable("articles", function (tbl) {
    tbl.increments("id").primary();
    tbl.string("title", 255).notNullable();
    tbl.string("article_content", 1024);
    tbl.string("author", 85);
  });
};
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("articles");
};
