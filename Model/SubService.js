const mongoose = require("mongoose");

const subservice = mongoose.Schema({
  name: {
    type: String,
  },
  parentService: {
    type: String,
  },
  category: {
    type: Array,
  },
  document: {
    type: Array,
  },
  formFields:{
    type:Array
  }
});

module.exports = mongoose.model("subservice", subservice);
