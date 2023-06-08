const fluorographyModel = require('../models/Fluorography');
const date = require('date-and-time')

var FSHK_NUMBER = 0;

class Record {
    // post
    fluorographyRecord = async (req, res) => {
        const { iin, lastname, firstname } = req.body;

        FSHK_NUMBER = FSHK_NUMBER+1;

        new fluorographyModel({
            number: String(FSHK_NUMBER),
            iin: iin,
            lastname: lastname,
            firstname: firstname,
        }).save();

        res.status(200).json({
            number: FSHK_NUMBER,
        })
    } 
    // get
    fluorographyGetAll = async (req, res) => {
        const allFshkNumbers = await fluorographyModel.find({});
        res.status(200).json(allFshkNumbers);
    }
    fluorographyGetById = async (req, res) => {
        const { fid } = req.body.params;
        
    }
}

module.exports = new Record;