require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ['MESSAGE']
});

const command = require('./app/commands');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!!`);
});

client.on('message', msg => {
    command.parseCommand(msg);
});

// eslint-disable-next-line no-undef
client.login(process.env.BOT_TOKEN);
