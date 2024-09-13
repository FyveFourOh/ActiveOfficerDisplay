const { Client, Guild } = require("discord.js");
const client = new Client;
const guild = new Guild;

// Gets config
global.config = require("./config/discordBot.json");

const { updatePlayerCount } = require("./server/utils/index.js");
const { debug } = require("console");

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

    // update player count on bot for server
    try {
        updatePlayerCount(client, 5);
    } catch {
        console.log(`Caught an error trying to invoke "updatePlayerCount"!`);
    }

    // Get a persons role


});


on('activeOndutyNUI:CheckUserRole', (clientDiscordID) => {
    // Code that gets executed once the event is triggered goes here.
    const discordServer = client.guilds.cache.get(config.guild);
    const member = discordServer.members.cache.get(clientDiscordID);
    if (member) {
        if (member.roles.cache.has(config.cityPoliceRole)) {
            console.log(`Successfuly found memeber with city police role!`)
            ExecuteCommand(`add_ace identifier.discord:${clientDiscordID} police.city allow`);
        }
        if (member.roles.cache.has(config.countySheriffRole)) {
            console.log(`Successfuly found memeber with county police role!`)
            ExecuteCommand(`add_ace identifier.discord:${clientDiscordID} police.county allow`);
        }
        if (member.roles.cache.has(config.statePoliceRole)) {
            console.log(`Successfuly found memeber with state police role!`)
            ExecuteCommand(`add_ace identifier.discord:${clientDiscordID} police.state allow`);
        }
    } else {
        console.log("Did not pass member check")
    }
});

on('activeOfficerDisplay:ShutdownBot', () => {
    try {
        console.log("AODAC: Discord perms NOT enabled!")
        client.destroy();
        console.log("Discord bot logged out successfuly!")
    } catch {
        console.log("Failed to logout of client and destroy instance!");
    }
})


client.login(config.token);