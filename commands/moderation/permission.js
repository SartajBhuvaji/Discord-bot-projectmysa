//CHECKS IF MEMBER IS MOD OR NOT

module.exports = (bot,msg)=>{  
        if(msg.member.roles.cache.some(r=>r.name ==="moderator")|| msg.member.roles.cache.some(r=>r.name ==="admin")){
        return true;
    }   
}