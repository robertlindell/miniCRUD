'use strict';

var express = require('express');
var Person = require('../models/model'); // eller vad vår model-fil heter

var router = express.Router();

//router.get
router.get("/hello", function(req, res, next) {
 		
 		var robert = new Person({
 			name: "robert",
 			color: "blue",
 			fed: true
 		});

 		robert.save(function(err){
 			if (err)
 				console.log("error on save");
 		});
 		res.end();
});

router.get("/person", function(req, res, next) {
 		
 		Person.find().then(function(allpersons){
 			console.log(allpersons);
 			return allpersons;
 		}, function(err) {
 			console.log(err);
 		});

 		res.send(allpersons);

 		res.end();
});

//router.post

//router.put

//router.delete

module.exports = router;