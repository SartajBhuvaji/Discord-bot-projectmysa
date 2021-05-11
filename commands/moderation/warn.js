/*
WARN A MEMBER : 
ACCESS : MOD, ADMIN
COMMAND : !sa warn <@member>
*/

module.exports = (bot,msg)=>{ 
    const member = msg.mentions.users.first();
    const newmsg = msg;
        msg.delete()
    if(member){
        const memberTarget = newmsg.guild.members.cache.get(member.id)
        if(memberTarget.roles.cache.some(r=>r.name ==="moderator")||memberTarget.roles.cache.some(r=>r.name ==="admin")){
            newmsg.channel.send("Cant warn moderators\n Please notify admin.");
            return;
        }
        else{
        const userTag  =  member.username;        
        newmsg.channel.send(`@${userTag}` + "** :warning: YOU ARE WARNED**" );
        }
    }else{
        newmsg.channel.send("User not mentioned.")
    }   
    }   