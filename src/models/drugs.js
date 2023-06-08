const {Schema, model} = require('mongoose');

const drugs = new Schema({
    iin:            {type: String},
    title:           {type: String},
    subject:        {type: String},
});

module.exports = model('drugs', drugs);