//EMBEDD : !sa helpmisc

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
	      .setDescription('Hi, projectmysa bot is a fun and easy-to-use Mental Health Support Bot for fun, help, hugs, and more!')
         .attachFiles(attachment)
	      .setThumbnail('attachment://logo.png')
      	.addFields(
            { name: 'How to find and use commands', value: "My prefix is ``!sa`` \nTo get started, please type one of the commands below."},
            //{ name: '\u200B', value: '\u200B' },
	      	{ name: "``!sa master``", value: 'Random fact about who make me.', inline: false },
            { name: "``!sa ping``", value: 'How far are we?', inline: false },
            { name: "``!sa coinflip``", value: 'Heads/Tails', inline: false },
            { name: "``!sa poll <statememt>``", value: 'Make a poll', inline: false },
            { name: "``!sa fun``", value: 'Sends you link to a random fun website', inline: false },

            { name: "```!sa play/stop/skip <URL>```", value: 'Music commands', inline: false },
            { name: "```!sa soundplay/soundstop/soundskip <sea/rain/relax>```", value: 'Sound commands', inline: false },
            
            { name: "```!sa easteregg```", value: '??????', inline: false },
            { name: "``!sa poke @member``", value: 'Poke a user', inline: false },
            { name: "``!sa sendlove @member``", value: 'Show your love', inline: false },
            { name: "``!sa report @member <reason>``", value: 'Anonymously  report a member', inline: false },
            { name: "```!sa helpmod```", value: 'Moderator commands help', inline: false },
            { name: "``!sa help``", value: 'For complete help list', inline: false },

            { name: '\u200B', value: '\u200B' },
	      )
         .setFooter('Mysa- Project Mental Health', 'attachment://logo.png');
          msg.reply(exampleEmbed);
    }

}