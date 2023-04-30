const Discord = require('discord.js');
const spestejs = require("croxydb");
/* discord-gg/altyapilar - SpesTe */
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name: "ping",
    description: "You see bot ping",
    type: 1,
    options: [],
    run: async (client, interaction) => {

    
      
        const customEmbed = new EmbedBuilder()
        .setTitle("You see bot ping!")
        .setDescription(client.ws.ping)

        interaction.channel.send({embeds: [customEmbed]})
    
    } 
};