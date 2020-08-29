//Vars
const Discord = require('discord.js')
const client = new Discord.Client()
var fs = require('fs');

const Command = require('./commands')

//Bot Init
client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.user.setActivity(":)help"); 
})

client.on('message', (msg) => {
    if (msg.author != client.user) {
        if  (msg.content.startsWith(":)")) {
            Command(msg)
        }
    }
})

//Grab Token and Run Bot
fs.readFile('token.txt', 'utf8', function(err, Token) {
    if (err) throw err;
    client.login(Token)
});