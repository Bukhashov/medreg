const modelResult = require('../models/result');
const date = require('date-and-time')

class Result {
    getAll = async (req, res) => {
        const { iin } = req.params;
        let results = await modelResult.find({iin: iin}, {title: 1})
        res.status(200).json(results);
    }

    getById = async (req, res) => {
        const { id } = req.params;
        let result = await modelResult.findById(id);
        res.status(200).json(result);
    }

    add = async (req, res) => {
        const { title, diagnostics, uiin } = req.body;

        new modelResult({
            title: title,
            iin: uiin,
            diagnostics: diagnostics,
        }).save();

        res.status(200).json({massage: "created"})
    }
}

module.exports = new Result;