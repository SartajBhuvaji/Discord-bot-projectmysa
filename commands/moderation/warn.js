/*
PERMA KICK A MEMBER : 
ACCESS : MOD, ADMIN
COMMAND : !sa ban <@member>
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
            newmsg.channel.send("Cant warn moderators\nPlease notify admin.");
            const userTag  =  member.username;        
           const modre = newmsg.author;
            tologs.send("\n:warning: \n"+`${modre}`+" TRIED TO WARN "+ `@${userTag}`);
            return;
        }
        else{
        const userTag  =  member.username;        
        const modre = newmsg.author;
        tologs.send(":warning: \n"+`${modre}`+" WARNED "+ `@${userTag}`);
        newmsg.channel.send(`@${userTag}` + "** :warning: YOU ARE WARNED**" );
        }
    }else{
        msg.channel.send("User not mentioned.")
    }   
    }   