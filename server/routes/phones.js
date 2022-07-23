'use strict';

const express = require('express');
const router = express.Router();
const phonesJSON = require('../data/phones.json');

router.get('/', (req, res, next) => {
  res.json({ type: 'success', data: phonesJSON });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  // Filter phone by ID.
  const phone = phonesJSON.filter((phone) => phone.id === Number(id));

  res.json({ type: 'success', data: phone });
});

module.exports = router;
