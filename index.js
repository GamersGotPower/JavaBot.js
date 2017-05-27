const commando = require('discord.js-commando');
const chalk = require('chalk');
const bot = new commando.Client();
const out = "/output.log"

bot.registry.registerGroup('fun', 'Fun');
bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('games', 'Games');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.login([redacted]);
