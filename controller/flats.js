const express = require('express');
const flats = express();
const models = require('../models');
const Sequelize = require('sequelize');

flats.get('/', (req, res) => {
  models.Flat.findAll().then(tasks => {
    res.json(tasks);
  });
});

flats.get('/:id', (req, res) => {
  models.Flat.findById(req.params.id).then(flats => {
    res.json(flats);
  });
});

flats.post('/', (req, res) => {
  models.Flat.create({
    title: req.body.title,
    price: req.body.price,
    floorArea: req.body.floorArea,
    country: req.body.country,
    zip: req.body.titlereq.body.zip,
    city: req.body.city,
    street: req.body.street
  }).then(flats => {
    res.json(flats);
  });
});

flats.put('/:id', (req, res) => {
  models.Flat.update(
    req.body,
    { where: { id: req.params.id } }
  ).then(flats => {
    res.json(flats);
  });
});

flats.delete('/:id', (req, res) => {
  models.Flat.destroy({ where: { id: req.params.id } }).then(flats => {
    res.json(flats);
  });
});

module.exports = flats;