 const Discord = require('discord.js');
 const bot = new Discord.Client();

 const token = 'ODM4NzUyNDM1Njg1Njg3MzY2.YI_rEw.-CS_dWLqofpUUk_H25Wmef3-HWM';
 bot.on('ready',()=>{
    console.log('Bot Online');
    console.log(`${bot.user.tag} is now watching online!`)
    bot.user.setActivity(' ig/@projectmysa', ({type: "WATCHING"}))

 })

 bot.on('message', msg=>{
     if(msg.content === "hibot"){
         msg.reply('Hello')
     }
 })

 bot.login(token);
