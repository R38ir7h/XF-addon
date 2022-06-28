const Discord = require("discord.js");
const client = new Discord.Client();

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