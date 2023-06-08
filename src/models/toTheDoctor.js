const {Schema, model} = require('mongoose');

const toTheDocter = new Schema({
    number:         {type: Number},
    uid:            {type: String},
    data:           {type: Date}
});

module.exports = model('toTheDocter', toTheDocter);