/*
FUN : CREATS A REPORT
ACCESS : 
COMMAND : !sa report <@member> reason
*/
const Discord = require('discord.js');
const BOTLOG_ID = "841678605830324274"
const botlogid = BOTLOG_ID
const ADMIN_ID = "838741294930591775"
const adminid = ADMIN_ID
const MOD_ID = "838740484687396884"
const mod_id = MOD_ID
module.exports = (bot,msg)=>{ 
   const target = msg.mentions.users.first();
   const newmsg = msg;
   if(!msg.content.substring().split(" ")[3]) {
      msg.delete()
      return newmsg.author.send("Report reason not mentioned.")  
   }
   if(msg.content.substring().split(" ")[0] === "!sa" && msg.content.substring().split(" ")[1]==="report"){
   msg.delete()
   try{
      newmsg.guild.members.cache.get(target.id)
   }catch{return newmsg.author.send('Please provide a user that you wish to report');}
   const memberTarget = newmsg.guild.members.cache.get(target.id)
   
   if(!target) return newmsg.author.send('Please provide a user that you wish to report');
   if(memberTarget.roles.cache.some(r=>r.id === mod_id)||memberTarget.roles.cache.some(r=>r.id === adminid)){
      return newmsg.author.send('Cannot report mods.');
   }
   else{
    var content = newmsg.content.substring().split(" ");
    var contentdelivery = " "
    for (i = 3; i < content.length; i++){
     contentdelivery  = contentdelivery + content[i] + " ";
   }

   const Moderator = msg.guild.roles.cache.find(role => role.id == mod_id);
 //  Embed.addField("All Roles", `This is the ${Moderator ? `${Moderator}` : "role not found"} role.`);
   const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
      const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTimestamp() 
            .setAuthor("Reported member",target.displayAvatarURL())
            .attachFiles(attachment)
            .setDescription(`
            **> Member Reported:** ${target}
            **> Reported by:** ${newmsg.author}
            **> Reported in:** ${newmsg.channel}
            **> Reason:** ${contentdelivery}
            **> URL:** ${newmsg.url}`)
            .addField("Alert", `${Moderator ? `${Moderator}` : "role not found"}`)
            .setFooter('Mysa- Project Mental Health', 'attachment://logo.png');
      const  tologs = bot.channels.cache.find(channel =>channel.id === botlogid);   
      newmsg.author.send(`**Report Alert**\n\nReported: ${target}\nFor: ${contentdelivery}\nIn channel: ${newmsg.channel}\nURL: ${newmsg.url}`);
      tologs.send(embed);
      }
   }
}
