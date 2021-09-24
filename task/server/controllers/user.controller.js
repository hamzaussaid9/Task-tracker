const users = require('../models/users.model.js');
const validation = require('../validationSchema.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
require('dotenv/config');

exports.RegisterUser = async (req, res) => {
    
    // validate data before creating a user
    const { error } = validation.registerValidation(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    // check if the account is already registered
    const emailExist = await users.findOne({ email: req.body.email });
    if (emailExist) return res.status(404).send("email already exists");

    // encrpty password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // creating user
    const newUser = new users({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    })
    //  reistering user
    try {
        const user = await newUser.save();
        res.send({user: user._id});
    } catch (error) {
        res.status(404).send(error);
    }
}

exports.userLogin = async (req, res) => {
    const { error } = validation.loginValidation(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    const checkUserExist = await users.findOne({ email: req.body.email });
    if (!checkUserExist) return res.status(404).send("user on this email does not exist");

    // check password
    const checkPassword = await bcrypt.compare(req.body.password, checkUserExist.password);
    if (!checkPassword) return res.status(404).send("email or password is incorrect");

    // create and assign a token
    const token = jwt.sign({ _id: checkUserExist.id }, process.env.TOKEN_SECRET);

    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24*60*60*1000 // one day 
    });

    res.header('auth-token', token).send(token);
}