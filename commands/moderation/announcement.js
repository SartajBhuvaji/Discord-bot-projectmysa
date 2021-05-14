/*
MOD COMMANDS TO MAKE AN ANNOUNCEMENT
ACCESS : MOD
COMMAND : !sa announce <statement>
*/

const ANNOUNCEMENT_ID = "838742354793725973"
const announcement_ID = ANNOUNCEMENT_ID
const BOTLOG_ID = "841678605830324274"
const botlogid = BOTLOG_ID
module.exports = (bot, msg) => {
    const newMsg = msg;
    const modre = newMsg.author;
    msg.delete();
    if(!newMsg.content.substring().split(" ")[3]) {
         newMsg.channel.send("No content described!"); 
         return;
    }
   
    var content = newMsg.content.substring().split(" ");
    var contentdelivery = " "
    for (i = 2; i < content.length; i++){
     contentdelivery  = contentdelivery + content[i] + " ";
    }
    const eve = msg.guild.roles.cache.find(role => role.id === "838739655562231828");
    const toConfessions = bot.channels.cache.find(channel =>channel.id === announcement_ID);
    toConfessions.send({embed: {
    color: 3447003,
    title: `🎉 ANNOUNCEMENT  \n\n`+`${eve}\n`+ contentdelivery,
        }
    });

    const  tologs = bot.channels.cache.find(channel =>channel.id === botlogid);
    tologs.send(`${modre}`+" Made an announcement");
}