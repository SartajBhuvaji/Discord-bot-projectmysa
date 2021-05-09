const { MessageReaction } = require("discord.js");
const Discord = require('discord.js');
const { merge } = require("snekfetch");
module.exports = (bot,msg)=>{  
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
            { name: 'Moderator commands', value: "My prefix is ``!sa``"},
            //{ name: '\u200B', value: '\u200B' },
            { name: "``!sa warn <member>``", value: 'To warn a member', inline: false },
            { name: "``!sa kick-y <member>``", value: 'To kick a member', inline: false },
	      	  { name: "``!sa ban-y-y <member>``", value: 'To ban a member', inline: false },      
	      	{ name: '\u200B', value: '\u200B' },
	      )
         .setFooter('Mysa- Project Mental Health', 'attachment://logo.png');
          msg.author.send(exampleEmbed);
}