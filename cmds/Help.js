const Embed = require('../util/Embed')
const Config = require('../Config')

const HelpEmbed = Embed.Create('Help', 'Prefix = ' + Config.Prefix, [
    {name: '`Help`', value: 'Shows You All The Commmands You Can Use With Fun Bot'},
    {name: '`Credits`', value: 'Shows the credits for Fun Bot'},
    {name: "`OverwatchGen`", value: "Generates a random Overwatch Hero"},
    {name: '`8Ball`', value: 'Answers you question in an 8Ball like way'},
    {name: '`Joke`', value: 'Generates a random joke'},
    {name: '`Meme`', value: 'Generates a randome meme'},
    {name: '`Dice`', value: 'Rolls a dice'},
    {name: '`RPS`', value: 'Lets you play Rock Paper Scissors with the bot'}
])

var cmd = function(msg, args) {
    msg.react('✋')
    msg.channel.send(HelpEmbed)
}

module.exports = cmd;