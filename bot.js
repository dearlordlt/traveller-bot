require('dotenv').config();

const Keyv = require('keyv');
const Discord = require('discord.js');

const mongo_url = process.env.MONGO_DB.toString();
const keyv = new Keyv(mongo_url);
keyv.on('error', err => console.error('Keyv connection error:', err));

const client = new Discord.Client({
    partials: ['MESSAGE']
});

const command = require('./app/commands');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!!`);
    client.user.setActivity(`traveller rpg (${Math.ceil(Math.random() * 1000)})`, {
        type: 'PLAYING'
    })
});

client.on('message', msg => {
    command.parseCommand(msg, keyv);
});

// eslint-disable-next-line no-undef
client.login(process.env.BOT_TOKEN);
