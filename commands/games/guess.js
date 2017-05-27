const commando = require('discord.js-commando')

class GuessGameCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'guess',
            group: 'games',
            memberName: 'guess',
            description: 'Guess a number between one and ten no decimals'
        });
    }

     async run(message, args) {
        var num = Math.floor(Math.random() * 10);
        console.log(num)
        if(num === args) {
            console.log('Correct:' + num);
            message.reply('You Guessed Right!!');
        } else {
            if(args > 10) {
                console.log('Over 10 : ' + num);
                message.reply('Please Dont Try To Cheat Stay Within 1 - 10 And There Is No Decimals');
            } else {           
                if(args < num) {
                    console.log('Not correct: ' + num + ":" + arg);
                    message.reply('That Was Not The Number I Was Looking For But The Number I Was Looking For Was' + num);
                }
            }
        } 
    }
}

module.exports = GuessGameCommand;
