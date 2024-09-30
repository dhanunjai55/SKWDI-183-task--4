const jwt = require("jsonwebtoken");

const createNewToken = (payload) => {
    return jwt.sign({ userId: payload }, 'rohith_secret', { expiresIn: '10d' });
}

module.exports = { createNewToken }