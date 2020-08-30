//Vars
const Discord = require('discord.js')
const client = new Discord.Client()

const Command = require('./commands')

const Config = require('./Config')

//Bot Init
client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.user.setActivity(Config.Prefix + "help");
})

client.on('message', (msg) => {
    if (msg.author != client.user) {
        if  (msg.content.startsWith(Config.Prefix)) {
            Command(msg)
        }
    }
})

//Grab Token and Run Bot
client.login(Config.Token)