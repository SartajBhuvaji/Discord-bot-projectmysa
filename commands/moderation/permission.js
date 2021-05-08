const { MessageReaction } = require("discord.js");
const Discord = require('discord.js');
const { merge } = require("snekfetch");
module.exports = (bot,msg)=>{  
        if(msg.member.roles.cache.some(r=>r.name ==="moderator")|| msg.member.roles.cache.some(r=>r.name ==="admin")){
        return true;
    }   
}