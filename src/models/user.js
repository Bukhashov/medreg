const {Schema, model} = require('mongoose');

const user = new Schema({
    IIN:            {type: String},
    lastname:       {type: String},
    firstname:      {type: String},
    password:       {type: String},
});

module.exports = model('users', user);