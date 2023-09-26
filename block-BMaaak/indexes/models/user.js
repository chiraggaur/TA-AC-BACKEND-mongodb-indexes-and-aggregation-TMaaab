var express = require("express");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// schema
var userSchema = new Schema({
  name: { type: String },
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  address: {
    city: { type: String },
    state: { type: String, unique: true },
    country: { type: String },
    pin: { type: Number },
  },
});

// 1. Define unique indexes on username and email. // added above inside schema
//2. define compound indexes on state and country field inside address document. Each country must have states which are unique.
userSchema.index({ "address.state": 1, "address.city": 1 }); // order matters state come first
// exporting the module

module.exports = mongoose.model("User", userSchema); // collection
