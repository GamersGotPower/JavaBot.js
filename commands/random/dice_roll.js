const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die'
        });
    }

    async run(message, args) {
        var roll = ["6", "1", "5", "2", "3", "4"]
        message.reply("You Rolled A " + roll[Math.floor(Math.random() * roll.length)]);
    }
}

module.exports = DiceRollCommand;