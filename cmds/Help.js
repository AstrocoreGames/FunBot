const Embed = require('../util/Embed')

const HelpEmbed = Embed.Create('Help', 'Prefix = :)', [{ name: '`help`', value: 'Shows You All The Commmands You Can Use With Fun Bot'}, {name: '`credits`', value: 'Shows the credits for Fun Bot'}, {name: "`OverwatchGen`", value: "Generates a random Overwatch Hero"}])

var cmd = function(msg, args) {
    msg.channel.send(HelpEmbed)
}

module.exports = cmd;