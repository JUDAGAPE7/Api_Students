const Country = require("./Country");
const City = require("./City");

City.belongsTo(Country);
Country.hasMany(City);
