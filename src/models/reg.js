const {Schema, model} = require('mongoose');

const reg = new Schema({
    iin:            {type: String},
    uid:            {type: String},
});

module.exports = model('reg', reg);