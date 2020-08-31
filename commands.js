const Config = require('./Config')
//Commands
const HelpCmd = require('./cmds/Help')
const CreditsCmd = require('./cmds/Credits')
const OverWatchHeroGenCmd = require('./cmds/OverwatchHeroGen')
const Magic8BallCmd = require('./cmds/8Ball')
const JokeCmd = require('./cmds/Joke')
const MemeCmd = require('./cmds/Meme')
const DiceCmd = require('./cmds/Dice')
const RPSCmd = require('./cmds/RPS')

//Command Processing
var CMDS = function(msg) {
    let fullCommand = msg.content.substr(Config.Prefix.length)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0].toLowerCase()
    let arguments = splitCommand.splice(1)
    if (primaryCommand === "help") {
        HelpCmd(msg, arguments)
    }
    if (primaryCommand === "credits") {
        CreditsCmd(msg, arguments)
    }
    if (primaryCommand === "overwatchgen") {
        OverWatchHeroGenCmd(msg, arguments)
    }
    if (primaryCommand === '8ball') {
        Magic8BallCmd(msg, arguments)
    }
    if (primaryCommand === 'joke') {
        JokeCmd(msg, arguments)
    }
    if (primaryCommand === 'meme') {
        MemeCmd(msg, arguments)
    }
    if (primaryCommand === 'dice') {
        DiceCmd(msg, arguments)
    }
    if (primaryCommand === 'rps') {
        RPSCmd(msg, arguments)
    }
}

//Export To Main File
module.exports = CMDS;