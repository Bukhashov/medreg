const {Schema, model} = require('mongoose');

const fluorography = new Schema({
    number:         {type: Number},
    iin:            {type: String},
    lastname:       {type: String},
    firstname:      {type: String},
});

module.exports = model('fluorography', fluorography);