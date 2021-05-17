const Discord = require('discord.js');
module.exports = (bot, msg) => {
    var contentdelivery =["Hi welcome to the server"]
    var title =["Welcome"]
    var channel_id =["838739979290148904"] //rules,
    for (i = 0; i < contentdelivery.length; i++){
    const toChannel = bot.channels.cache.find(channel =>channel.id === channel_id[i]);//rules
    const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
    const exampleEmbed = new Discord.MessageEmbed()
     .setColor('#0099ff')
     .setTitle(title[i])
    // .setURL('https://www.instagram.com/projectmysa/')
     .setAuthor('ProjectMysa', 'attachment://logo.png', 'https://www.instagram.com/projectmysa/')
     .setDescription(contentdelivery[i])
     //.attachFiles(attachment)
     .setThumbnail('attachment://logo.png')
    .setFooter('Mysa- Project Mental Health', 'attachment://logo.png')
    toChannel.send(exampleEmbed)
    /*.then(async embedMessage => {
        await embedMessage.react('✅');
    });
*/ }

}