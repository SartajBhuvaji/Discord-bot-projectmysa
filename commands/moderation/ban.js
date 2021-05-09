module.exports = (bot,msg)=>{ 
    const member = msg.mentions.users.first();
    if(member){
        const memberTarget = msg.guild.members.cache.get(member.id)
        if(memberTarget.roles.cache.some(r=>r.name ==="moderator")||memberTarget.roles.cache.some(r=>r.name ==="admin")){
            msg.channel.send("Cant ban moderators\n Please notify admin.");
            return;
        }
        memberTarget.ban();
        msg.channel.send("User has been banned");
    }else{
        msg.channel.send("User not mentioned.")
    }   
    }   