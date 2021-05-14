/*
MOD COMMANDS TO MAKE AN ANNOUNCEMENT
ACCESS : MOD
COMMAND : !sa announce <statement>
*/
const Discord = require('discord.js');
const ANNOUNCEMENT_ID = "838742354793725973"
const BOTLOG_ID = "841678605830324274"
const EVERYONEROLE_ID = "838739655562231828"
const announcement_ID = ANNOUNCEMENT_ID
const everyoneid = EVERYONEROLE_ID
const botlogid = BOTLOG_ID
module.exports = (bot, msg) => {
    const newMsg = msg;
    const modre = newMsg.author;
    msg.delete();
    if(!newMsg.content.substring().split(" ")[3]) {
         newMsg.channel.send("No content described!"); 
         return;
    }
   
    var content = newMsg.content.substring().split(" ");
    var contentdelivery = " "
    for (i = 2; i < content.length; i++){
     contentdelivery  = contentdelivery + content[i] + " ";
    }
    const eve = msg.guild.roles.cache.find(role => role.id === everyoneid);

    const toAnnouncement = bot.channels.cache.find(channel =>channel.id === announcement_ID);
    const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
    const exampleEmbed = new Discord.MessageEmbed()
     .setColor('#0099ff')
     .setTitle('⚜️ Announcement')
    // .setURL('https://www.instagram.com/projectmysa/')
     .setAuthor('ProjectMysa', 'attachment://logo.png', 'https://www.instagram.com/projectmysa/')
     .setDescription(contentdelivery)
     .attachFiles(attachment)
     //.setThumbnail('attachment://logo.png')
    .setFooter('Mysa- Project Mental Health', 'attachment://logo1.png')
    toAnnouncement.send(exampleEmbed).then(async embedMessage => {
        await embedMessage.react('✅');
    });
    const  tologs = bot.channels.cache.find(channel =>channel.id === botlogid);
    tologs.send(`${modre}`+" Made an announcement");
}