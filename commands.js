const fs = require('fs')
const Config = require('./Config')

var commands = []

const commandFiles = fs
    .readdirSync("./cmds")
    .filter((file) => file.endsWith(".js"))

for (const file of commandFiles) {
    commands[file.slice(0, -3)] = []
    commands[file.slice(0, -3)].cmd = require(`./cmds/${file}`)
}

//Command Processing
var CMDS = function(msg) {
    let fullCommand = msg.content.substr(Config.Prefix.length)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0].toLowerCase()
    let arguments = splitCommand.splice(1)
    if (commands[primaryCommand]) {
        commands[primaryCommand].cmd(msg, arguments)
    }
}

//Export To Main File
module.exports = CMDS;