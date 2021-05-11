/*
PERMA KICK A MEMBER : 
ACCESS : MOD, ADMIN
COMMAND : !sa kick <@member>
*/

module.exports = (bot,msg)=>{ 
    const member = msg.mentions.users.first();
    if(member){
        const memberTarget = msg.guild.members.cache.get(member.id)
        if(memberTarget.roles.cache.some(r=>r.name ==="moderator")||memberTarget.roles.cache.some(r=>r.name ==="admin")){
            msg.channel.send("Cant kick moderators\n Please notify admin.");
            return;
        }
        memberTarget.kick();
        msg.channel.send("🚪 User has been kicked");
    }else{
        msg.channel.send("User not mentioned.")
    }   
    }  