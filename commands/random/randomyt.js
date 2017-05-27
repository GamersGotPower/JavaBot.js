const commando = require('discord.js-commando')

class RandomytCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "randomyt",
            group: "random",
            memberName: "randomyt",
            description: "Gives you a random youtube link"
        });
    }

    async run(message, args) {
        var videos = ["https://www.youtube.com/watch?v=c_9Q0Urlbyg", "https://www.youtube.com/watch?v=uFmzhki2b70", "https://www.youtube.com/watch?v=3f_cAy8ugvQ", "https://www.youtube.com/watch?v=WbV2C2YViwA", "https://www.youtube.com/watch?v=gGruZGY4Gvk", "https://www.youtube.com/watch?v=7DbQ7Imqi1s", "https://www.youtube.com/watch?v=lyWpCCCRsgU", "https://www.youtube.com/watch?v=THV32wbp3P0"]
        message.reply(videos[Math.floor(Math.random() * videos.length)]);
    }
}

module.exports = RandomytCommand;