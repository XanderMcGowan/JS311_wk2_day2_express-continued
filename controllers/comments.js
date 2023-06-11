let comments = require("../data/comments");

const list = function (req, res) {
  res.json(comments);
};

const show = function (req, res) {
  let id = req.params.id;

  let found = comments.find(function (element) {
    if (element._id == id) {
      return true;
    }
  });

  res.json(found);
};

let commentsCounter = 5;
const create = function (req, res) {
  let body = req.body.body;

  let newEntry = {
    _id: commentsCounter,
    body: body,
    postId: 1,
  };

  commentsCounter++;
  comments.push(newEntry);
  console.log(counter);
};

module.exports = { list, show, create };
