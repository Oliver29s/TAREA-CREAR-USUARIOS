const Repairs = require("./repairs.model");
const User = require("./user.model");

const initModel = () =>{
    User.hasMany(Repairs)
    Repairs.belongsTo(User)
}

module.exports = initModel