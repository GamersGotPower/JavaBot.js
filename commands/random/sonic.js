const commando = require('discord.js-commando')

class SonicCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "sonic",
            group: "random",
            memberName: "sonic",
            description: "Sonic"
        });
    }

    async run(message, args) {
        var images = ["http://pre02.deviantart.net/1d8a/th/pre/f/2014/223/a/7/sonic_the_hedgehog__x__by_jogita6-d7uowcd.png", "http://pre03.deviantart.net/b872/th/pre/i/2014/216/7/0/sonic_the_hedgehog__boredom_result__by_irishhips-d7tp83l.png", "http://pre06.deviantart.net/98bd/th/pre/f/2014/125/f/5/sonic_the_hedgehog__3d_champions__by_jogita6-d7hb7ay.png"];
        message.reply(images[Math.floor(Math.random() * images.length)]);
        message.reply(args);

    }
}

module.exports = SonicCommand;
