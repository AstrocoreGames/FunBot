const fetch = require('node-fetch');
const Embed = require('../util/Embed')

var cmd = function (msg, args) {
    let params = encodeURIComponent(args);
    let uri = "https://8ball.delegator.com/magic/JSON/" + params;
    fetch(uri)
        .then(res => res.text())
        .then(body => {
            body = JSON.parse(body)
            const AnswerEmbed = Embed.Create('🎱 8Ball 🎱', '', [{name: 'Answer', value: '`' + body.magic.answer + '`'}])
            msg.channel.send(AnswerEmbed)
        });
}

module.exports = cmd