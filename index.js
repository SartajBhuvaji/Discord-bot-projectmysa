 const Discord = require('discord.js');
 const bot = new Discord.Client();
 const token = 'ODM4NzUyNDM1Njg1Njg3MzY2.YI_rEw.-CS_dWLqofpUUk_H25Wmef3-HWM';
 const confessHere  = "838748507236990986" //FROM
 const confessions  = "838748595096125481" //TO

 bot.on('ready',()=>{
    console.log('Bot Online');
    console.log(`${bot.user.tag} is now watching online!`)
    bot.user.setActivity(' ig/@projectmysa', ({type: "WATCHING"}))

 })

 bot.on('message', msg=>{
     if(msg.content === "hibot"){
        msg.reply('Hello from the local server')       
     }
     if(msg.content === "master"){
        msg.reply('I was made by Sartaj')       
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
