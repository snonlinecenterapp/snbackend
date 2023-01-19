const mongoose = require("mongoose");

const form = mongoose.Schema({
  // name: {
  //   type: String,
  // },
  // mobile: {
  //   type: String,
  // },
  // email: {
  //   type: String,
  // },
  // addhar: {
  //   type: String,
  // },
  // pan: {
  //   type: String,
  // },
  // gst: {
  //   type: String,
  // },
  // state: {
  //   type: String,
  // },
  // district: {
  //   type: String,
  // },
  // taluka: {
  //   type: String,
  // },
  // extras:{
  //   type:Array
  // }
  data:[]
});

module.exports = mongoose.model("form", form);
// {
//   "name":"purushottam",
//   "mobile":"8347958734",
//   "email":"g@gmail.com",
//   "addhar":"1212",
//   "pan":"ejgkwsjo4524",
//   "gst":"1321321",
//   "state":"ambad",
//   "district":"jalna",
//   "taluka":"amabad"
// }