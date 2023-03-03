const crypto = require('crypto');
const express = require('express');
const app = express();



const hasher = (password) => {
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    console.log(hash)
    return hash;
}

module.exports = hasher;