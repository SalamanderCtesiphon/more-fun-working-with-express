const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, maxLength: 100, minLength: 3 }
});

// Virtual for author's full name
GenreSchema.virtual("genre").get(function () {
  // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case
  let genrename = this.genre_name;

  return genrename;
});

// Virtual for author's URL
GenreSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/genres/${this._id}`;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);