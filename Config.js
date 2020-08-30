var fs = require('fs');

var Config = {}

var ConfigF = JSON.parse(fs.readFileSync("Config.json", 'utf8'))

Config.Prefix = ConfigF.Prefix

Config.Token = ConfigF.Token

module.exports = Config