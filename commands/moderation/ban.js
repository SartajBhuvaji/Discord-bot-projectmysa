/*
PERMA BAN A MEMBER : 
ACCESS : MOD, ADMIN
COMMAND : !sa kick <@member>
*/
const BOTLOG_ID = "841678605830324274"
const botlogid = BOTLOG_ID
module.exports = (bot,msg)=>{ 
    const member = msg.mentions.users.first();
    const newmsg = msg;
    msg.delete()
    if(member){
        const  tologs = bot.channels.cache.find(channel =>channel.id === botlogid);
        const memberTarget = newmsg.guild.members.cache.get(member.id)
        if(memberTarget.roles.cache.some(r=>r.name ==="moderator")||memberTarget.roles.cache.some(r=>r.name ==="admin")){
            newmsg.channel.send("Cant ban moderators\n Please notify admin.");
            const userTag  =  member.username;        
            const modre = newmsg.author;
            tologs.send("\n❌❌❌: \n\n"+`${modre}`+" TRIED TO BAN "+ `@${userTag}`);
            return;
        }
        memberTarget.ban();
        const userTag  =  member.username;        
        const modre = newmsg.author;
        tologs.send("❌❌❌\n\n"+`${modre}`+" BANNED "+ `@${userTag}`);
        newmsg.channel.send("🚫 "+`@${userTag}` + "** Is Banned**"+"\nby "+`${modre}` );
    }else{
        msg.channel.send("User not mentioned.")
    }   
    }   