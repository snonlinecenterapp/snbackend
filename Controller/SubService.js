const subservice = require("../Model/SubService");

exports.createSubService = async (req, res) => {
  const data = await subservice.create(req.body);
  res.status(200).json({
    success: true,
    data: data,
    message: "subservice added successfully",
  });
};

exports.getSubService = async (req, res) => {
  console.log("hello i called");
  const data = await subservice.find();
  console.log(subservice);
  res.status(200).json({
    success: true,
    data: data,
    message: "data fetch successfully",
  });
};

exports.deleteSubService = async (req, res) => {
  const data = await subservice.deleteOne({ _id: req.body.id });
  res.status(200).json({
    success: true,
    message: "service deleted",
  });
};