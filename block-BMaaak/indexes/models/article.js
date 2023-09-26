var express = require("express");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// schema
var userSchema = new Schema({
  title: { type: String },
  description: { type: String },
  tags: [String],
});

// 1. Add multikey indexes on tags which is an array of strings;
userSchema.index({ tags: 1 });
// 2. Add text indexes on title as users will search for texts present in an article's title.
userSchema.index({ title: "text" });
// 3. Update text indexes to include descriptions as well. Implement text indexes on both title and description.
userSchema.index({ title: "text", description: "text" });

module.exports = mongoose.model("Article", userSchema); // collection
