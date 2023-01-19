const user = require("../Model/User");

exports.getUser = async (req, res) => {
  const data = await user.find();
  res.status(200).json({
    success: true,
    data: data,
    message: "data fetch successfully",
  });
};
exports.createUser = async (req, res) => {
  console.log(req.body);
  const data = await user.create(req.body);
  res.status(200).json({
    success: true,
    data: data,
    message: "user added successfully",
  });

};
