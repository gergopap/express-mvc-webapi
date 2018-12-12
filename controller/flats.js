const express = require('express'); // importáljuk az express app-ot
const flats = express(); // definiájuk az express app-ot
const models = require('../models'); // importáljuk a modeleket
const Sequelize = require('sequelize'); // importáljuk a sequelize-t

//index
flats.get('/', (req, res) => {  // flats object-re meghívunk egy http get metódust, egyik bemeneti argumentuma a route, a másik egy callback függvény
  models.Flat.findAll().then(tasks => { // models-ből a Flat modelre meghivunk egy findAll metódust, hogy az összes Flat elemet kipörgesse
    res.json(tasks);  // json formátumban visszaadjuk az adatot
  });
});

//show
flats.get('/:id', (req, res) => { // flats object-re meghívunk egy http get metódust, egyik bemeneti argumentuma a route, a másik egy callback függvény
  models.Flat.findById(req.params.id).then(flats => {
    res.json(flats);
  });
});

//create
flats.post('/', (req, res) => {   // flats object-re meghívunk egy http post metódust, egyik bemeneti argumentuma a route, a másik egy callback függvény
  models.Flat.create({ // models-ből a Flat objectre meghivunk egy create metódust, hogy létrehozzunk egy uj rekordot
    title: req.body.title, // a mező nevet a request body-ból bodyparser segitsegevel kapja meg
    price: req.body.price, // több kommentre nem maradt idő :(
    floorArea: req.body.floorArea,
    country: req.body.country,
    zip: req.body.titlereq.body.zip,
    city: req.body.city,
    street: req.body.street
  }).then(flats => {
    res.json(flats);
  });
});

//update
flats.put('/:id', (req, res) => {
  models.Flat.update(
    req.body,
    { where: { id: req.params.id } }
  ).then(flats => {
    res.json(flats);
  });
});

//delete
flats.delete('/:id', (req, res) => {
  models.Flat.destroy({ where: { id: req.params.id } }).then(flats => {
    res.json(flats);
  });
});

module.exports = flats;
