//EMBEDD : !sa help

const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports = (bot, msg) => {
    const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
         const exampleEmbed = new Discord.MessageEmbed()
	      .setColor('#0099ff')
	      .setTitle('Projectmysa')
	      .setURL('https://www.instagram.com/projectmysa/')
	      //.setAuthor('Sartaj', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	      .setDescription('Hi, ✨projectmysa bot is a fun and easy-to-use Mental Health Support Bot for confessions, help, hugs, and more! ❤️')
         .attachFiles(attachment)
	      .setThumbnail('attachment://logo.png')
      	.addFields(
            { name: 'How to find and use commands❔', value: "My prefix is ``!sa`` \nTo get started, please type one of the commands below."},
            //{ name: '\u200B', value: '\u200B' },
	      	{ name: "``!sa talk``", value: 'Talk to a @moderator.\n', inline: false },
	      	{ name: "```!sa breath```", value: 'Breath wizard, to calm yourself.', inline: false },
            { name: "```!sa cat```", value: 'Cute cat image attacks.', inline: false },
            { name: "```!sa selfcare```", value: 'Simple self care routine for you.', inline: false }, 
            { name: "```!sa helpmisc```", value: 'More commands.', inline: false },
     
            { name: '\u200B', value: '\u200B' },
            { name: "Other Useful Links", value: '\u200B', inline: false },
            { name: "Instagram", value: " [@projectmysa](https://www.instagram.com/projectmysa/)", inline : true},
            { name: "Coded by", value: " [@SartajBhuvaji](https://github.com/SartajBhuvaji)", inline : true}
	      )
         .setFooter('Mysa- Project Mental Health', 'attachment://logo.png');
          msg.reply(exampleEmbed);
}