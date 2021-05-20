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
      return newmsg.channel.send("reason not mentioned")  
   }
   if(msg.content.substring().split(" ")[0] === "!sa" && msg.content.substring().split(" ")[1]==="report"){
   msg.delete()
   const memberTarget = newmsg.guild.members.cache.get(target.id)
   if(!target) return newmsg.author.send('Please provide a user that you wish to report');
   if(memberTarget.roles.cache.some(r=>r.id === mod_id)||memberTarget.roles.cache.some(r=>r.id === adminid)){
      return newmsg.author.send('Cannot report mods');
   }
   else{
      // newmsg.channel.send(newmsg.url);
    var content = newmsg.content.substring().split(" ");
    var contentdelivery = " "
    for (i = 3; i < content.length; i++){
     contentdelivery  = contentdelivery + content[i] + " ";
    }

      const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTimestamp()
            .setFooter('Mysa- Project Mental Health', 'attachment://logo.png')
           // image = setImage(msg.author.displayAvatarURL)
            .setAuthor("Reported member", target.displayAvatarURL)
            .setDescription(`
            **> Member Reported:** ${target}
            **> Reported by:** ${newmsg.author}
            **> Reported in:** ${newmsg.channel}
            **> Reason:** ${contentdelivery}
            **> URL:** ${newmsg.url}`);
      const  tologs = bot.channels.cache.find(channel =>channel.id === botlogid);   
      tologs.send(embed);
      newmsg.author.send(embed);

   }
}

}
