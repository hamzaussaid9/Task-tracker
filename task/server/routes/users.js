const router = require('express').Router();
const jwt = require('jsonwebtoken');
const actions = require('../controllers/user.controller');
const usersModel = require('../models/users.model');

// register a user
router.post('/register', actions.RegisterUser);

// user login
router.post('/login', actions.userLogin);

router.get('/', async (req, res) => {
    try {
        const cookie = await req.cookies['jwt'];
        const claims = jwt.verify(cookie, process.env.TOKEN_SECRET);
        if (!claims) return res.status(401).send('authentication  error occured');
        const user = await usersModel.findOne({ _id: claims._id });
        const { password, ...data } = user.toJSON();
        res.send(data);
    }
    catch (error) {
        res.send(error);
    }
})

router.post('/logout', async (req, res) => {
    res.cookie('jwt', '', 0);
    res.send({
        message: "success"
    })
})

module.exports = router;