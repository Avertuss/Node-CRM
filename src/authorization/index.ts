
import jwt from 'jsonwebtoken';
import fs from 'fs';

var keyCert : Buffer = fs.readFileSync('C:\\Work\\core\\secret\\key.pem');

import {AuthController} from './AuthController';
import {AuthService} from './AuthService';



/*
module.exports.controller = controller;
module.exports.service = service;
module.exports = controller(new service(jwt,cert));
*/
const auth =  AuthController(new AuthService(jwt.sign,keyCert));

export default auth