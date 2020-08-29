const Discord = require('discord.js')

var Embed = {}

Embed.Create = function(title, desc, fields) {
    const Emb = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle(title)
        .setDescription(desc)
        .setAuthor('Fun Bot', 'https://raw.githubusercontent.com/PY44N/FunBot/master/img/Icon.png', 'https://github.com/PY44N/FunBot')
        .setFooter('Fun Bot by Pyan and Green726');
        var i;
        for (i = 0; i < fields.length; i++) {
            Emb.addFields(fields[i])
        }
    return Emb
}

module.exports = Embed;