 /*
 PROJECT NODE JS : PROJECT MY-SA
 DESCRIPTION     : Project Mysa is a Mental Health Project aimed at building a community, 
                   stimulating discourse by creating a safe space, breaking taboos, & helping you love yourself'
 OTHER FILES     : COMMANDS : ALL JS COMMANDS
                   MODERATION: PATH :(COMMANDS/MODERATION): MODERATOR SPECIFIC COMMANDS
                   MEDIA : IMAGE/GIF FILES
                   NODE_MODULES : JS LIBRARIES 
                   CONFIG.JSON - KEYS 
                   PACKAGE-LOCK.JSON - PACKAGE DETAILS
                   PACKAGE.JSON - PACKAGE DETAILS
                   EASTEREGGDATA.JSON - DATA FOR EASTEREGG-WORKER.JS
                   README.MD - GITHUB README
BY               : SARTAJ    
GITHUB           : https://github.com/SartajBhuvaji/projectmysa-discord-bot
BOT URL          : https://discord.com/oauth2/authorize?client_id=838752435685687366&scope=bot&permissions=8

 */
 const Discord = require('discord.js');
 const config = require("./config.json");
 const bot = new Discord.Client();
 const token = config.BOT_TOKEN;
 const confessHere  = config.confessHereToken; 
 const confessions  = config.confessionsToken;
 const MODCHAT_ID  = config.MODCHAT_ID; 
 const helpmisc = require('./commands/helpmisc.js')
 const poll = require('./commands/poll.js')
 const { get, copy } = require("snekfetch"); 
 const permission = require('./commands/moderation/permission');
 const pokeLove = require('./commands/pokeLove');
 const easteregg = require('./commands/easteregg');
 const eastereggworker = require('./commands/easteregg-worker');
 const modcommands = require('./commands/moderation/modcommands');
 const kick = require('./commands/moderation/kick');
 const ban = require('./commands/moderation/ban');
 const warn = require('./commands/moderation/warn');
 const music = require('./commands/music');
 const fun = require('./commands/fun.js');
 const help = require('./commands/help');
 const musicSound = require('./commands/music-sound');
 const announcement = require('./commands/moderation/announcement');
const welcome = require('./commands/singleusecommands/welcome');
 bot.on('ready',()=>{
    console.log('Bot Online');
    console.log(`${bot.user.tag} is now watching online!`)
    bot.user.setActivity(' !sa help | @projectmysa', ({type: "PLAYING"}))

 })
//needs special permission in discord/developer/application/bot ->Privileged Gateway Intents & SERVER MEMBERS INTENT
//message new members
 bot.on('guildMemberAdd',(member)=>{
    const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
         const exampleEmbed = new Discord.MessageEmbed()
	      .setColor('#0099ff')
	      .setTitle('Projectmysa')
	      .setURL('https://www.instagram.com/projectmysa/')
	      .setDescription('Hi, welcome to the server! \nProject Mysa is a Mental Health Project aimed at building a community, stimulating discourse by creating a safe space, breaking taboos, & helping you love yourself')
         .attachFiles(attachment)
	      .setThumbnail('attachment://logo.png')
      	.addFields(
            { name: 'How to get started ?', value: "My prefix is ``!sa`` \n Type ``!sa help`` in any text channel to learn more."},
            { name: '\u200B', value: '\u200B' },
            { name: "Other Useful Links", value: '\u200B', inline: false },
            { name: "Instagram", value: " [@projectmysa](https://www.instagram.com/projectmysa/)", inline : true},
            { name: "Coded by", value: " [@SartajBhuvaji](https://github.com/SartajBhuvaji)", inline : true}         
	      )
         .setFooter('Mysa- Project Mental Health', 'attachment://logo.png')
         member.send(exampleEmbed);
 })

 bot.on('message', msg=>{
   //Single time
   if(msg.content === "!sa singletime")
  {if(permission(bot,msg)) welcome(bot,msg)
return;
  }
   //
    if(msg.content.substring().split(" ")[0] === "!sa" && msg.channel.id  === confessHere){
       const channel = msg.guild.channels.cache.find((channel => channel.id === confessHere));
       msg.author.send(`Sorry you cannot use !sa commands in <#${channel.id}>`)
       msg.delete()
       return;
    }
    //basic commands
     if (msg.author.bot) return;
     if(msg.content === "!sa hi"){
        msg.reply('Hello from the local server 👋🏻')       
     }
     if(msg.content === "!sa master"){
      const facts =["He likes green apples🍏 more than red🍎.",
      "He lovess coding.",
      "Coffee is his life",
      "He loves you all."                  
    ]
        try{
      const randomNum = (Math.floor(Math.random()* 4)+1).toString(); 
        msg.reply(facts[randomNum])   
               }catch(err){
                  msg.reply("He's still working 👨‍💻") 
               }
     }
     if(msg.content === "!sa ping"){
      const timeTaken =  msg.createdTimestamp - Date.now();
      msg.reply(`Pong! This message had a latency of ${timeTaken}ms.`);            
     }
     if(msg.content === "!sa coinflip"){
      const randomNum = (Math.floor(Math.random()* 2)+1).toString();
      if(randomNum ==='1') msg.reply("Heads"); 
      else  msg.reply("Tails"); 
     }    
     //music bot 
     if(msg.content.substring().split(" ")[0] === "!sa" && (msg.content.substring().split(" ")[1]=== "play")||(msg.content.substring().split(" ")[1]=== "pause")||(msg.content.substring().split(" ")[1]=== "stop")||(msg.content.substring().split(" ")[1]=== "skip")){
      if(permission(bot,msg)) music(bot,msg);
      else{
         msg.channel.send("Look If you had One shot, Or, one opportunity To seize everything you ever wanted, In one moment..."); 
         msg.channel.send("This is weird... I guess you dont the permission to use this commad"); 
      }
     } 
     if(msg.content.substring().split(" ")[0] === "!sa" && (msg.content.substring().split(" ")[1]=== "soundplay")||(msg.content.substring().split(" ")[1]=== "soundpause")||(msg.content.substring().split(" ")[1]=== "soundstop")||(msg.content.substring().split(" ")[1]=== "skip")){
      if(permission(bot,msg)) musicSound(bot,msg);
      else{
         msg.channel.send("Look If you had One shot, Or, one opportunity To seize everything you ever wanted, In one moment..."); 
         msg.channel.send("This is weird... I guess you dont the permission to use this commad"); 
      }
     } 

     //
     if(msg.content.substring().split(" ")[0] === "!sa" &&msg.content.substring().split(" ")[1]=== "poll"){
        try{
      poll(bot,msg);
        }catch(err){}
     }
     if(msg.content.substring().split(" ")[0] === "!sa" &&msg.content.substring().split(" ")[1]=== "poke"){
      pokeLove(bot,msg)
      return;
     }
     if(msg.content.substring().split(" ")[0] === "!sa" && msg.content.substring().split(" ")[1]=== "sendlove"){
      pokeLove(bot,msg)
      return;
     }

     //moderation
     if(msg.content === '!sa helpmod'){
      if(permission(bot,msg)){
       msg.reply("I have sent you a DM of moderator commands."); 
       modcommands(bot,msg)
       return;
       }
       else {
          msg.reply("\nTo ban people use !sa .....\noops!\nyou dont seem to be a moderator!!\nCommand not permitted"); 
       }
    }
     if(msg.content.substring().split(" ")[0] === "!sa" && msg.content.substring().split(" ")[1]=== "warn"){
      if(permission(bot,msg)) warn(bot,msg)         
     }
     if(msg.content.substring().split(" ")[0] === "!sa" && msg.content.substring().split(" ")[1]=== "kick" ){
      if(permission(bot,msg)) kick(bot,msg)         
      }
      if(msg.content.substring().split(" ")[0] === "!sa" && msg.content.substring().split(" ")[1]=== "ban" ){
       if(permission(bot,msg)) ban(bot,msg)         
      }
      if(msg.content.substring().split(" ")[0] === "!sa" && msg.content.substring().split(" ")[1]=== "announce"){
         if(permission(bot,msg)) announcement(bot,msg);
      }
      //


      if(msg.content === "!sa fun"){
          fun(bot,msg)     
          return;    
        }

     if(msg.content === "!sa getrole" ){
       msg.author.send("WIP"); 
       return;
      }
   
     //primary command
      if(msg.content=== "!sa help"){
         help(bot,msg)
         return;
      }
      if(msg.content === '!sa helpmisc'){
         helpmisc(bot,msg)
         return;
      }
      if(msg.content === '!sa easteregg'){
         easteregg(bot,msg)
         return;
      }
      var array = msg.content.substring().split(' ');
      if(array[0]==="!sa" && array[1]==="easter" ){
         eastereggworker(bot,msg)
         return;
      }
      //Heal bot
      // bug: gif file not loading
      if(msg.content === `!sa talk`){
         msg.reply('Hi, I have messaged the moderators. You should receive a new message soon. :heart: ');
         msg.react(`✅`);
         const toConfessions = bot.channels.cache.find(channel =>channel.id === confessions);
         const userTag  =  msg.author.tag;
         toConfessions.send({embed: {
             color: 3447003,
             title: `Can we talk? `,
             fields: [
              { name: "@" + 'moderator' + " " , value:" please have a session with" +` ${userTag}` },
            ]
          }
        });     
      }
      if(msg.content === `!sa breath`){
        const randomNum = (Math.floor(Math.random()* 6)+1).toString(); 
        var array = ["breath1","breath2","breath3","breath4","breath5","breath6"]
         const breath = "breath"+`${randomNum}`+".gif";
         const ballembed = new Discord.MessageEmbed()
         .setColor(0x000000)
         .setDescription(`Try this for a minute. \nEverything will be okay :heart:`)
         .attachFiles("media/"+`${breath}`)
         msg.reply(ballembed);         
         
      }
      if(msg.content === `!sa cat`) {
         try {
            msg.react(`🐈`);
            get('https://aws.random.cat/meow').then(res => {
               const embed = new Discord.MessageEmbed()
               .setImage(res.body.file)
               .setColor('#0099ff')
               return msg.channel.send({embed});
            });
         } catch(err) {
            return console.log(err.stack);
         }
      }
      if(msg.content === `!sa selfcare`) {
         const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
         const exampleEmbed = new Discord.MessageEmbed()
	      .setColor('#0099ff')
	      .setTitle('Projectmysa')
	      .setURL('https://www.instagram.com/projectmysa/')
	      //.setAuthor('Sartaj', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	      .setDescription('Hi, ✨projectmysa bot is a fun and easy-to-use Mental Health Support Bot for confessions, help, hugs, and more!❤️')
         .attachFiles(attachment)
	      .setThumbnail('attachment://logo.png')

         const randomNum = (Math.floor(Math.random()* 2)+1).toString();
         if(randomNum ==='1'){
            exampleEmbed.addFields(
               { name: 'You routine for the day ', value: "\u200B"},
               //{ name: '\u200B', value: '\u200B' },
               { name: "• drink water  \n• eat a meal \n• take medications (if needed) \n• make your bed  \n• brush your teeth  \n• take a few deep breaths and stretch  \n• take some time to yourself \n• tidy up \n• be kind to yourself, always"
               , value: "\u200B", inline: false },   
            )
         }
         else{
            exampleEmbed.addFields(
               { name: '• Call a Friend', value: "\u200B"},
            )
         }//add more cases
         exampleEmbed.setFooter('Mysa- Project Mental Health', 'attachment://logo.png');
          msg.reply(exampleEmbed);
      }
      //

     //confession
     if(msg.channel.id  === confessHere){
         const newMsg = msg;
         msg.delete();
         const toConfessions = bot.channels.cache.find(channel =>channel.id === confessions);
         const userTag  =  newMsg.author.tag;
         toConfessions.send({embed: {
             color: 3447003,
             title: `New Confession `,
             fields: [
              { name: "@" + 'moderator' + " " , value:" please care"},
              { name: `From: ${userTag}`, value:`Message: \n${newMsg}`},
            ]
          }
        });
     }
 })
 bot.login(token);