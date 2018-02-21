const Discord = require('discord.js');
const auth = require ('./auth.json');

const client = new Discord.Client();

client.on('ready', function () {
    console.log("Bot is now connected");
});

client.login(auth.token);

client.on('message', message => {
    if (message.content === "!emojis") {
        const list = message.guild.emojis.map(e=>e.toString()).join(" ");
        message.channel.send(list);
    }
    if (message.author.username === "Greesb") {
        const monkas = client.emojis.find("name", "monkaS");
        message.react(monkas.id);
    }

    if (message.content === "a" || message.content === "A"
        || message.content === "ah" || message.content === "AH"
        || message.content === "Ah" || message.content === "aH") {
        const ah = client.emojis.find("name", "ah");
        message.react(ah.id);
    }
});
