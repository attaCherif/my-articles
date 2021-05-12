const faker = require("faker");

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("comments")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("comments").insert([
        {
          article_id: faker.datatype.number({ min: 1, max: 3 }),
          comment_content: faker.lorem.sentence(),
        },
        {
          article_id: faker.datatype.number({ min: 1, max: 3 }),
          comment_content: faker.lorem.sentence(),
        },
        {
          article_id: faker.datatype.number({ min: 1, max: 3 }),
          comment_content: faker.lorem.sentence(),
        },
      ]);
    });
};
