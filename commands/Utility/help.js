
const { EmbedBuilder } = require('discord.js');
const { readdirSync } = require('fs');

module.exports = {
  name: 'help',
  run: (client, message, args) => {
    const prefix = client.prefix;

      const embed = new EmbedBuilder()
        .setTitle('Help Menu')
        .addField(client.commands.map(d => {
                return {
                    name: `\`/${d.name}\``,
                    value: `> *${d.description}*`,
                    inline: true
                }
            })
        .setFooter({
          text: `Requested by ${message.author.tag}`,
          iconURL: message.author.displayAvatarURL(),
        })
        .setFooter({text:
          `Type ${prefix}help <command name> for details on a command!`,
        })
        .setTimestamp()
        .setColor('White')};
