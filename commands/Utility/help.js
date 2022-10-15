const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "help",
    aliases: ["h"],
    description: "Show all of the Commands",
    run: async (client, message, args) => {
        return message.reply({embeds: [new MessageEmbed()
            .setColor("FUCHSIA")
            .setTitle(`👍 **Here is a list of all of my Commands**`)
            .addFields(client.commands.map(d => {
                return {
                    name: `\`/${d.name}\``,
                    value: `> *${d.description}*`,
                    inline: true
                }
            }))
        ]}).catch(() => null);
    },
};
