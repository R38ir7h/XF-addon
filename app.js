const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

try {
    config = require("./config.json");
}
catch (e) {
    console.log('Could not find a valid config file. Rename config.json.default to config.json and configure accordingly.');
    return;
}

client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels.`);
    client.user.setActivity(config.status);
});

client.login(config.token);
