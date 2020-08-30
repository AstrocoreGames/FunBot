const Embed = require('../util/Embed')

const CreditsEmbed = Embed.Create('Credits', '', [{name: 'Creators', value: 'Pyan and Green726'}, {name: 'Contributors', value: 'Anyone who contributed on our github at https://github.com/AstrocoreGames/FunBot'}])

var cmd = function(msg, args) {
    msg.channel.send(CreditsEmbed)
}

module.exports = cmd;