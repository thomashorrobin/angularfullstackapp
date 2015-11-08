'use strict';

var _ = require('lodash');
var Newendpoint = require('./newendpoint.model');

// Get list of newendpoints
exports.index = function(req, res) {
  Newendpoint.find(function (err, newendpoints) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(newendpoints);
  });
};

// Get a single newendpoint
exports.show = function(req, res) {
  Newendpoint.findById(req.params.id, function (err, newendpoint) {
    if(err) { return handleError(res, err); }
    if(!newendpoint) { return res.status(404).send('Not Found'); }
    return res.json(newendpoint);
  });
};

// Creates a new newendpoint in the DB.
exports.create = function(req, res) {
  Newendpoint.create(req.body, function(err, newendpoint) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(newendpoint);
  });
};

// Updates an existing newendpoint in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Newendpoint.findById(req.params.id, function (err, newendpoint) {
    if (err) { return handleError(res, err); }
    if(!newendpoint) { return res.status(404).send('Not Found'); }
    var updated = _.merge(newendpoint, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(newendpoint);
    });
  });
};

// Deletes a newendpoint from the DB.
exports.destroy = function(req, res) {
  Newendpoint.findById(req.params.id, function (err, newendpoint) {
    if(err) { return handleError(res, err); }
    if(!newendpoint) { return res.status(404).send('Not Found'); }
    newendpoint.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}