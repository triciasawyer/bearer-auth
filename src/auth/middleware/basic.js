'use strict';

const base64 = require('base-64');
const { users } = require('../models/index.js');

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) { next('no auth headers present'); }

  let basic = req.headers.authorization;
  let basicString = basic.split(' ').pop();
  let [username, pass] = base64.decode(basicString).split(':');

  try {
    req.user = await users.authenticateBasic(username, pass)
    next();
  } catch (e) {
    console.error(e);
    res.status(403).send('Invalid Login');
  }

};
