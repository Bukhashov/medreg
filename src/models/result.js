const {Schema, model} = require('mongoose');

const result = new Schema({
    title:          {type: String},
    iin:            {type: String},
    diagnostics:    {type: String},
    date:           {type: Date}
});

module.exports = model('result', result);