const jwt = require("jsonwebtoken");
const {BadRequest} = require("../errors");
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequest("Please provide name and password");
  }
  const id = new Date().getDate();
  // try to keep payload small
  const token = jwt.sign({id, username }, process.env.JWT_SECRET, {expiresIn: "30d"});
  res.status(200).json({ msg: "User created", token });
};
const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({
      msg: `Hello, ${req.user.username}`,
      secret: `Here your num ${luckyNumber}`,
    });
};

module.exports = {
  login,
  dashboard,
};  
