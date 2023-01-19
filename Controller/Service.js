const service = require("../Model/Service");

exports.getService = async (req, res) => {
  console.log("hello i called");
  const data = await service.find();
  console.log(service);
  res.status(200).json({
    success: true,
    data: data,
    message: "data fetch successfully",
  });
};

exports.createService = async (req, res) => {
  const data = await service.create(req.body);
  res.status(200).json({
    success: true,
    data: data,
    message: "service added successfully",
  });
};

exports.deleteService = async (req, res) => {
  console.log(req);
  const data = await service.deleteOne({ _id: req.body.id });
  res.status(200).json({
    success: true,
    message: "service deleted",
  });
};
