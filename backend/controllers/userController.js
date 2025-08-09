const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { name, email, password, phone } = req.body;

  const userexists = await User.findOne({ mobile: phone });

  if (userexists)
    return res.status(400).json({ msg: 'User with this phone exists!' });
   
  const passhash = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    mobile: phone,
    password: passhash,
  });

  const token = jwt.sign({ id: user._id }, process.env.jwt_token, {
    expiresIn: '7d',
  });

  res.status(201).json({
    user: { id: user._id, email, phone, name },
    token,
  });
};


const Login = async (req,res) => {
    const {phone, password} = req.body;

    const user = await User.findOne({phone})

    if (!user) res.status(400).json({msg:"Account not found, Register!"})
    
    const isCorrect = await bcrypt.compare(password, user.password)
    if (!isCorrect) res.send(400).json({msg:"Wrong Password ! Try again"})
    const token = jwt.sign({id : user._id},process.env.jwt_token,{expiresIn:'7d'});

    res.status(201).json({user:{id:user._id,phone,name:user.name,email:user.email},token})

}

module.exports = {register, Login}
