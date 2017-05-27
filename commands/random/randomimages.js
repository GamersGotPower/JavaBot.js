const commando = require('discord.js-commando')

class RandomImageCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "randomimage",
            group: "random",
            memberName: "randomimage",
            description: "Gives you a random image"
        });
    }

    async run(message, args) {
        var image = ["https://cdn01-www-clorox-com.scdn3.secure.raxcdn.com/wp-content/uploads/2015/08/thick-cling-bleach-hero.png", "https://yt3.ggpht.com/-X-L9p-XyJLM/AAAAAAAAAAI/AAAAAAAAAAA/Zo9rNG2y9yQ/s900-c-k-no-mo-rj-c0xffffff/photo.jpg", "http://i2.kym-cdn.com/photos/images/original/001/096/013/02d.jpg", "https://www.scirra.com/arcade/images/2154/450/sanic-the-game.jpg", "https://i.ytimg.com/vi/o6r9SermInk/maxresdefault.jpg", "http://2static1.fjcdn.com/comments/Poor+guy+should+have+known+you+never+touch+a+snakes+_e93cd8a0aa8be931c3e09722e77911d9.jpg", "http://img09.deviantart.net/5bbb/i/2015/287/a/4/black_dragon_by_sandara-d6h59lm.jpg", "http://pre07.deviantart.net/b80e/th/pre/i/2013/157/7/2/dragon_by_ze_l-d67zvom.jpg"]
        message.reply(image[Math.floor(Math.random() * image.length)]);
    }
}

module.exports = RandomImageCommand;