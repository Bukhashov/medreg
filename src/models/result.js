const {Schema, model} = require('mongoose');

const result = new Schema({
    title:          {type: String},
    iin:            {type: String},
    diagnostics:    {type: String},
    date:           {type: String}
});

module.exports = model('result', result);