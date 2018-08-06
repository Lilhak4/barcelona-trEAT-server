'use strict';

const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');

router.post('/search', (req, res, next) => {
  const apiKey = 'OBRBfzwmpMpDpDNpx1WsUYY9NL5KmaPfpUImpEKrkuYPuh2eeDZGWFvSqUeANb_U9Y9uPAANJtxKm7rYze8AQkpf2l4f7L-awFlq5GarpXkpoWb669rXYtoU499hW3Yx';

  const searchRequest = {
    term: req.body.term('bar'),
    location: req.body.location('poblenou, barcelona')
  };

  const client = yelp.client(apiKey);
  client.search(searchRequest).then(response => {
    res.json(response);
  }).catch(next);
});