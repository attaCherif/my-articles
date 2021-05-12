const faker = require("faker");

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("articles")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("articles").insert([
        {
          title: faker.name.title(),
          article_content: faker.lorem.paragraph(),
          author: faker.name.findName(),
        },
        {
          title: faker.name.title(),
          article_content: faker.lorem.paragraph(),
          author: faker.name.findName(),
        },
        {
          title: faker.name.title(),
          article_content: faker.lorem.paragraph(),
          author: faker.name.findName(),
        },
      ]);
    });
};
