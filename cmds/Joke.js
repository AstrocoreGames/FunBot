const fetch = require('node-fetch');
const Embed = require('../util/Embed')

var cmd = function (msg, args) {
    msg.react('🤣')
    fetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,racist,sexist&format=txt')
        .then(res => res.text())
        .then(body => {
            const JokeEmbed = Embed.Create('🤣 Joke 🤣', '', [{name: 'Joke', value: '`' + body + '`'}])
            msg.channel.send(JokeEmbed)
        });
}
module.exports = cmd