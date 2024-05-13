const mongoose = require("mongoose");

const schema = mongoose.Schema({
  head: {
    type: String,
    default: "Unknown",
  },
  image: {
    type: String,
    default: "img/visual_1.png",
  },
  date: String,
  description: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
    },
  ],
});

schema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Blog", schema);
