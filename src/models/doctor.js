const {Schema, model} = require('mongoose');

const doctor = new Schema({
    Iin:            {type: String},
    lastname:       {type: String},
    firstname:      {type: String},
    patronymic:     {type: String},
    post:           {type: String},
    password:       {type: String},
});

module.exports = model('users', doctor);