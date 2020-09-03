const fetch = require('node-fetch');
const Embed = require('../util/Embed')

var cmd = function (msg, args) {
    msg.react('🤣')
    fetch('https://meme-api.herokuapp.com/gimme')
        .then(res => res.text())
        .then(body => {
            body = JSON.parse(body)
            msg.channel.send(body.url)
        });
}

module.exports = cmd