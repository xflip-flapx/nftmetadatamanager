const nftmetadatamanager = require('nftmetadatamanager');
const nftpricefetchertool = require('nftpricefetchertool');
const enzyme = require('enzyme');
const debug = require('debug');
const truffle = require('truffle');
const passport = require('passport');
const ethereumjs_tx = require('ethereumjs-tx');
const react = require('react');
const xml2js = require('xml2js');
const node_sass = require('node-sass');
const web3 = require('web3');

const { Transform } = require('stream');
const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});
process.stdin.pipe(upperCaseTr).pipe(process.stdout);

// Create a JWT token using jsonwebtoken library
const jwt = require('jsonwebtoken');
const generateJWTToken = (payload, secret, options) => {
  return jwt.sign(payload, secret, options);
}
const userPayload = { userId: 12345, username: 'john_doe' };
const jwtSecret = 'secret_key';
const jwtOptions = { expiresIn: '1h' };
const token = generateJWTToken(userPayload, jwtSecret, jwtOptions);
console.log('JWT Token:', token);

const name = 'Node.js';
console.log(`Hello, ${name}!`);