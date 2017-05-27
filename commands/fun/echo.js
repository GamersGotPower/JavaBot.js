const commando = require('discord.js-commando')

class EchoCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "echo",
            group: "fun",
            memberName: "echo",
            description: "Says your argument"
        });
    }
     async run(message, args) {
        message.channel.send(args);
     }
}

module.exports = EchoCommand;