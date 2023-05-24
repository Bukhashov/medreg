const userModel = require('../models/user');
const bcrypt = require('bcrypt');

const saltRounds = 4;
const salt = bcrypt.genSaltSync(saltRounds);

class Auth{ 
    singin = async (req, res) => {
        const { password, iin } = req.body;

        if(password.length >= 8){
            const user = await userModel.findOne({IIN: iin});
            if(user) {
                const PasswordController = bcrypt.compareSync(password, user.password);
                if(PasswordController) {
                    res.status(200).json({ 
                       uid: user._id,
                       lastname: user.lastname,
                       firstname: user.firstname,
                       iin: user.IIN
                    })
                }else {
                    res.status(400).json({ massage: "password or email is wrong"})
                }
            }else {
                res.status(400).json({ massage: "password or email is wrong"})
            }
        }else {
            res.status(400).json({ massage: "password or email is wrong"})
        }

    }
    singup = async (req, res) => {
        const {lastname, firstname, iin, password} = req.body;
        
        if (lastname != "" && lastname.length > 4){
            if (password.length >= 8) {
                const email = req.body.email;

                const emailController = await userModel.find({IIN: iin})
                if (emailController.length == 0){
                    const newUser = new userModel({
                        lastname: lastname,
                        firstname: firstname,
                        IIN: iin,
                        label: label,
                        password: bcrypt.hashSync(password, salt),
                    }).save();
                    res.status(200).json({ massage: 'user created' })
                }else {
                    res.status(400).json({ massage: 'email already exists' })
                }   
            }else {
                res.status(400).json({massage: 'password must be more than 4 characters'})
            }
        }else {
            res.status(400).json({ massage: 'enter full name' })
        }
    }
}

module.exports = new Auth;