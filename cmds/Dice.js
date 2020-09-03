const Embed = require('../util/Embed')

function Random(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
}

var cmd = function (msg, args) {
    msg.react('🎲')
    const Num = Random(6)
    const DiceEmbed = Embed.Create('🎲 Dice 🎲', '', [{name: 'Number', value: '`' + Num + '`'}])
    msg.channel.send(DiceEmbed)
}

module.exports = cmd