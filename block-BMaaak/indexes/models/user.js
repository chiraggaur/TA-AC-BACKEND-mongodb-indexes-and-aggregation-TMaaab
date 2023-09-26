var express = require("express");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// schema
var userSchema = new Schema({
  title: { type: String },
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  address: {
    city: { type: String },
    state: { type: String, unique: true },
    country: { type: String },
    pin: { type: Number },
  },
});

module.exports = mongoose.model("User", userSchema); // collection
