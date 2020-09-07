const fs = require('fs')
const Config = require('./Config')
//Commands
const HelpCmd = require('./cmds/help')
const CreditsCmd = require('./cmds/credits')
const OverWatchHeroGenCmd = require('./cmds/overwatchgen')
const Magic8BallCmd = require('./cmds/8ball')
const JokeCmd = require('./cmds/joke')
const MemeCmd = require('./cmds/meme')
const DiceCmd = require('./cmds/dice')
const RPSCmd = require('./cmds/rps')

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