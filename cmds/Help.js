const Embed = require('../util/Embed')
const Config = require('../Config')

const HelpEmbed = Embed.Create('Help', 'Prefix = ' + Config.Prefix, [{ name: '`help`', value: 'Shows You All The Commmands You Can Use With Fun Bot'}, {name: '`credits`', value: 'Shows the credits for Fun Bot'}, {name: "`OverwatchGen`", value: "Generates a random Overwatch Hero"}])

var cmd = function(msg, args) {
    msg.channel.send(HelpEmbed)
}

module.exports = cmd;