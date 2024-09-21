/*
-----------------------------------------------------------------------------------
                          COPYRIGHT NOTICE - DO NOT REMOVE
-----------------------------------------------------------------------------------
This file is part of Active Officer Display and Access Control [AODAC]            
Copyright (C) 2024  FyveFourOh													
                                                                                	
[AODAC] is free software: you can redistribute it and/or modify				
it under the terms of the GNU General Public License as published by				
the Free Software Foundation, either version 3 of the License, or					
(at your option) any later version.												
                                                                                	
This program is distributed in the hope that it will be useful,					
but WITHOUT ANY WARRANTY; without even the implied warranty of					
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the						
GNU General Public License for more details.										
                                                                                	
You should have received a copy of the GNU General Public License					
along with this program.  If not, see <https://www.gnu.org/licenses/>.			
                                                                                	
-----------------------------------------------------------------------------------
*/


const { Client, Guild } = require("discord.js");
const client = new Client;
const guild = new Guild;


// Gets config
global.config = require("./config/bot.json");

const { updatePlayerCount, Delay, waitUntil } = require("./nui/js/bot/utils/index.js");
const { debug } = require("console");

var botReady = false;

client.on("ready", () => {
    console.log(`Discord bot logged in as ${client.user.tag}!`);

    botReady = true;

    // update player count on bot for server
    try {
        updatePlayerCount(client, 5);
    } catch {
        console.log(`Caught an error trying to invoke "updatePlayerCount"!`);
    }


});


on('aod:CheckUserRole', async (clientDiscordID) => {
    // Code that gets executed once the event is triggered goes here.

    await waitUntil(() => botReady == true);

    const discordServer = client.guilds.cache.get(config.guild);
    const member = discordServer.members.cache.get(clientDiscordID);
    if (member) {
        if (member.roles.cache.has(config.cityPoliceRole)) {
            console.log(`Successfuly found memeber with city police role!`);
            ExecuteCommand(`add_ace identifier.discord:${clientDiscordID} police.city allow`);
        }
        if (member.roles.cache.has(config.countySheriffRole)) {
            console.log(`Successfuly found memeber with county police role!`);
            ExecuteCommand(`add_ace identifier.discord:${clientDiscordID} police.county allow`);
        }
        if (member.roles.cache.has(config.statePoliceRole)) {
            console.log(`Successfuly found memeber with state police role!`);
            ExecuteCommand(`add_ace identifier.discord:${clientDiscordID} police.state allow`);
        }
    } else {
    
        //console.log("Did not pass member check")
    }

});

on('aod:SetupDiscordBot', async () => {

    
    try {
        await client.login(config.token);
    } catch {
        console.log("Discord bot failed to login, check your bot token in bot.json!");
    }
    

});