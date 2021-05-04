 const Discord = require('discord.js');
 const config = require("./config.json");
 const bot = new Discord.Client();
 const token = config.BOT_TOKEN;
 const prefix = config.PREFIX;
 const confessHere  = config.confessHereToken //FROM
 const confessions  = config.confessionsToken //TO

 bot.on('ready',()=>{
    console.log('Bot Online');
    console.log(`${bot.user.tag} is now watching online!`)
    bot.user.setActivity(' ig/@projectmysa', ({type: "WATCHING"}))

 })

 bot.on('message', msg=>{
     if (msg.author.bot) return;
     if(msg.content === "hibot"){
        msg.reply('Hello from the local server')       
     }
     if(msg.content === `${prefix}+"master"`){
        msg.reply('I was made by Sartaj')       
     }
     if(msg.content === "!sa ping"){
      const timeTaken =  msg.createdTimestamp - Date.now();
      msg.reply(`Pong! This message had a latency of ${timeTaken}ms.`);            
   }

     //CONFESSION BOT
     if(msg.channel.id  === confessHere){ //identify #confess-here 
         const newMsg = msg;
         msg.delete();
         const toConfessions = bot.channels.cache.find(channel =>channel.id === confessions);
         const usetTag  =  newMsg.author.tag;
         toConfessions.send({embed: {
             color: 3447003,
             title: `New Confession `,
             fields: [
              { name: "@" + 'moderator' + " " , value:" please take care"},
              { name: `From: ${usetTag}`, value:`Message: \n${newMsg}`},
            ]
          }
        });
     }
     //
 })

 bot.login(token);
