let products = require("../data/products");

const list = function (req, res) {
  res.json(products);
};

const show = function (req, res) {
  let id = req.params.id;

  let found = products.find(function (element) {
    if (element._id == id) {
      return true;
    }
  });

  res.json(found);
};

let productsCounter = 11;
const create = function (req, res) {
  let name = req.body.name;
  let description = req.body.description;

  let newEntry = {
    _id: productsCounter,
    name: name,
    description: description,
  };

  productsCounter++;
  products.push(newEntry);
  console.log(counter);
};

module.exports = { list, show, create };
