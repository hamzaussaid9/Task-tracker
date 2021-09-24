const jwt = require('jsonwebtoken');
require('dotenv/config');

module.exports =  (req, res, next) => {
    const token = req.header('auth-token');
    if (token) return res.status(401).send('Acess denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();

    } catch (error) {
        res.status(404).send(error);
    }
}