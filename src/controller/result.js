const modelResult = require('../models/result');

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



}

module.exports = new Result;