const Discord = require('discord.js');
const { merge } = require("snekfetch");
module.exports = (bot,msg)=>{  
    const randomNum = (Math.floor(Math.random()* 10)+1).toString(); // random no 1-10  
    if(msg.content.substring().split(" ")[0] === "!sa" &&msg.content.substring().split(" ")[1]=== "poke"){
        if (msg.mentions.users.first()) {
           msg.channel.send(`<@${msg.author.id}>` + " 👉🏻 " +` <@${msg.mentions.users.first().id}>`)
       } else {
        msg.channel.send("You have to mention a user to poke.")
       }
    } 
    if(msg.content.substring().split(" ")[0] === "!sa"  &&msg.content.substring().split(" ")[1] === "sendlove"){
      //  const hug = "hug"+`${randomNum}`+".png"
        if (msg.mentions.users.first()) {
        const hug = "hug1.png" 
        const ballembed = new Discord.MessageEmbed()
         .setColor(0x000000)
         .setDescription(` <@${msg.mentions.users.first().id}>`+" Hugs from" +`<@${msg.author.id}>`)
         .attachFiles("media/"+`${hug}`)
         msg.reply(ballembed);
        }else {
            msg.channel.send("Menthion member, whom to send.")
           }
    }   
}