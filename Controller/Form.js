const form = require("../Model/Form");

exports.createForm = async (req, res) => {
  const data = await form.create(req.body);
  res.status(200).json({
    success: true,
    data: data,
    message: "subservice added successfully",
  });
};

exports.getFormData = async (req, res) => {
  console.log("hello i called");
  const data = await form.find();
  res.status(200).json({
    success: true,
    data: data,
    message: "data fetch successfully",
  });
};
