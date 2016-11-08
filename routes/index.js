'use strict';

const express = require('express');
const router = express.Router();
//const path = require('path');
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.use(express.static('./public'));

router.get('/stylesheets/style.css', function(req, res, next){
	res.sendFile('/stylesheets/style.css');
});


router.get( '/users/:name', function (req, res) {
  let tweetsByUser = tweetBank.find({name: req.params.name});
  res.render( 'index', { tweets: tweetsByUser})
});

router.get( '/tweets/:id', function (req, res) {
  let tweetID = tweetBank.find({id: req.params.id});
  console.log(req.params.id, tweetID);
  res.render( 'index', { tweets: tweetID})
});

module.exports = router;