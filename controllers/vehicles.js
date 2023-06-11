let vehicles = require("../data/vehicles");

const list = function (req, res) {
  res.json(vehicles);
};

const show = function (req, res) {
  let id = req.params.id;

  let found = vehicles.find(function (element) {
    if (element._id == id) {
      return true;
    }
  });

  res.json(found);
};

let vehiclesCounter = 21;
const create = function (req, res) {
  let year = req.body.year;
  let make = req.body.make;
  let model = req.body.model;

  let newEntry = {
    _id: vehiclesCounter,
    year: year,
    make: make,
    model: model,
  };

  vehiclesCounter++;
  vehicles.push(newEntry);
  console.log(counter);
};

module.exports = { list, show, create };
