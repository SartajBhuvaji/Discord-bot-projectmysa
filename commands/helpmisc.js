
const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = (bot, msg) => {
    if(msg.content ==="!sa helpmisc"){
        //msg.reply('made to misc help')
        const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
         const exampleEmbed = new Discord.MessageEmbed()
	      .setColor('#0099ff')
	      .setTitle('Projectmysa')
	      .setURL('https://www.instagram.com/projectmysa/')
	      //.setAuthor('Sartaj', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	      .setDescription('Hi, projectmysa bot is a fun and easy-to-use Mental Health Support Bot for confessions, help, hugs, and more!')
         .attachFiles(attachment)
	      .setThumbnail('attachment://logo.png')
      	.addFields(
            { name: 'How to find and use commands', value: "My prefix is ``!sa`` \nTo get started, please type one of the commands below."},
            //{ name: '\u200B', value: '\u200B' },
	      	{ name: "``!sa master``", value: 'Random fact about who make me.', inline: false },
            { name: "``!sa ping``", value: 'How far are we?', inline: false },
            { name: "``!sa coinflip``", value: 'Heads/Tails', inline: false },

            { name: "``!sa help``", value: 'For complete help list', inline: false },
	      
            { name: '\u200B', value: '\u200B' },
            { name: "Other Useful Links", value: '\u200B', inline: false },
            { name: "Instagram", value: " [@projectmysa](https://www.instagram.com/projectmysa/)", inline : true},
	      )
         .setFooter('Mysa- Project Mental Health', 'attachment://logo.png');
          msg.reply(exampleEmbed);


    }


}