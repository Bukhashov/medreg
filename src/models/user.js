const {Schema, model} = require('mongoose');

const user = new Schema({
    Iin:            {type: String},
    lastname:       {type: String},
    firstname:      {type: String},
    patronymic:     {type: String},
    password:       {type: String},
});

module.exports = model('users', user);