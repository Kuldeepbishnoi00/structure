const userModel = require("../models/UserSchema.js");
const userragestor = (req, res) => {
  try {
    const { fullname, email, pasword } = req.body;
    const result = userModel.create({
      fullname: fullname,
      email: email,
      pasword: pasword,
    });
    console.log(result);
    res
      .status(201)
      .json({ success: true, message: `${fullname}signup successfully` });
  } catch (error) {
    console.log(error); 
  }
};

module.exports = { userragestor };
