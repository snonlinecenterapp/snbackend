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

exports.updateSubService = async (req, res) => {
  console.log(req.body);
  const data = await subservice.findByIdAndUpdate(
    { _id: req.body.id },
    {
      name: req.body.name,
      parentService: req.body.parentService,
      category: req.body.category,
      document: req.body.document,
      formFields: req.body.formFields,
    }
  );
  res.status(200).json({
    message: "subservice update",
    data: data,
  });
};
