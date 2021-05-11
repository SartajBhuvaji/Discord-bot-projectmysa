 const Discord = require('discord.js');
 const config = require("./config.json");
 //const ytdl = require('ytdl-core-discord');
 const bot = new Discord.Client();
 const token = config.BOT_TOKEN;
 const confessHere  = config.confessHereToken; //FROM
 const confessions  = config.confessionsToken; //TO
 const MODCHAT_ID  = config.MODCHAT_ID; 
 const privateMessage = require('./private-message');
 //const selfAccesseedRole = require('./selfAccessedRole.js');
 const helpmisc = require('./commands/helpmisc.js')
 const poll = require('./commands/poll.js')
 const { get, copy } = require("snekfetch"); 
 const permission = require('./commands/moderation/permission');
const pokeLove = require('./commands/pokeLove');
const easteregg = require('./commands/easteregg');
const eastereggworker = require('./commands/easteregg-worker');
const modcommands = require('./commands/modcommands');
const kick = require('./commands/moderation/kick');
const ban = require('./commands/moderation/ban');
const warn = require('./commands/moderation/warn');
 bot.on('ready',()=>{
    console.log('Bot Online');
    console.log(`${bot.user.tag} is now watching online!`)
    bot.user.setActivity(' ig/@projectmysa', ({type: "WATCHING"}))

 })
//needs special permission in discord/developer/application/bot ->Privileged Gateway Intents & SERVER MEMBERS INTENT
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
   // if(msg.content === "!sa master"){
      // console.log('In pvt msg')
     //privateMessage(bot,'!sa personalmsg','Pong')
   //}
     if (msg.author.bot) return;
     if(msg.content === "!sa hi"){
        msg.reply('Hello from the local server 👋🏻')       
     }
     if(msg.content === "!sa master"){
      const facts =["He likes green apples🍏 more than red🍎.",
      "He lovess coding.",
      "Coffee is his life",
      "He loves you all."                  
    ];
        try{
      const randomNum = (Math.floor(Math.random()* 5)+1).toString(); // random no 1-10 
        msg.reply(facts[randomNum])   
               }catch(err){
                  msg.reply("He's still working 👨‍💻") 
               }
     }
     if(msg.content === "!sa ping"){
      const timeTaken =  msg.createdTimestamp - Date.now();
      msg.reply(`Pong! This message had a latency of ${timeTaken}ms.`);            
     }
     if(msg.content === "!sa weather"){
      weather();            
     }
     if(msg.content === "!sa coinflip"){
      const randomNum = (Math.floor(Math.random()* 2)+1).toString();
      if(randomNum ==='1') msg.reply("Heads"); 
      else  msg.reply("Tails"); 
     }     
     if(msg.content.substring().split(" ")[0] === "!sa" &&msg.content.substring().split(" ")[1]=== "poll"){
      poll(bot,msg);
     }
     if(msg.content.substring().split(" ")[0] === "!sa" &&msg.content.substring().split(" ")[1]=== "poke"){
        pokeLove(bot,msg)
     }
     if(msg.content.substring().split(" ")[0] === "!sa" && msg.content.substring().split(" ")[1]=== "sendlove"){
      pokeLove(bot,msg)
     }
     if(msg.content.substring().split(" ")[0] === "!sa" && msg.content.substring().split(" ")[1]=== "warn"){
      if(permission(bot,msg))  warn(bot,msg)         
      }
     if(msg.content.substring().split(" ")[0] === "!sa" && msg.content.substring().split(" ")[1]=== "kick-y" && msg.channel.id  === MODCHAT_ID){
       if(permission(bot,msg)) kick(bot,msg)         
   }
   if(msg.content.substring().split(" ")[0] === "!sa" && msg.content.substring().split(" ")[1]=== "ban-y-y" && msg.channel.id  === MODCHAT_ID){
   if(permission(bot,msg)) ban(bot,msg)         
   }

     if(msg.content === "!sa getrole" ){ //&& role!=
       msg.author.send("WIP"); 
     //selfAccesseedRole(bot,msg,"!sa getrole")
    // qna(bot,msg,"!sa getrole")
     //msg.author.send(selfAccesseedRole(bot,msg,"!sa getrole","1"));
     // setTimeout(() => {console.log("World!"); }, 10000);
     //msg.author.send(selfAccesseedRole(bot,msg,"!sa getrole","2"))
    // msg.author.send(selfAccesseedRole(bot,msg,"!sa getrole"))
      }
   
     //Heal bot
     // bug: gif file not loading
      if(msg.content=== "!sa help"){
         const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
         const exampleEmbed = new Discord.MessageEmbed()
	      .setColor('#0099ff')
	      .setTitle('Projectmysa')
	      .setURL('https://www.instagram.com/projectmysa/')
	      //.setAuthor('Sartaj', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	      .setDescription('Hi, ✨projectmysa bot is a fun and easy-to-use Mental Health Support Bot for confessions, help, hugs, and more!❤️')
         .attachFiles(attachment)
	      .setThumbnail('attachment://logo.png')
      	.addFields(
            { name: 'How to find and use commands❔', value: "My prefix is ``!sa`` \nTo get started, please type one of the commands below."},
            //{ name: '\u200B', value: '\u200B' },
	      	{ name: "``!sa talk``", value: 'Find someone to talk to.\n', inline: false },
	      	{ name: "```!sa breath```", value: 'Breath wizard, to calm yourself.', inline: false },
            { name: "```!sa cat```", value: 'Cute cat image attacks.', inline: false },
            { name: "```!sa selfcare```", value: 'Simple self care routine for you.', inline: false }, 
            { name: "```!sa helpmisc```", value: 'More commands.', inline: false },
     
            { name: '\u200B', value: '\u200B' },
            { name: "Other Useful Links", value: '\u200B', inline: false },
            { name: "Instagram", value: " [@projectmysa](https://www.instagram.com/projectmysa/)", inline : true},
            { name: "Coded by", value: " [@SartajBhuvaji](https://github.com/SartajBhuvaji)", inline : true}
	      )
         .setFooter('Mysa- Project Mental Health', 'attachment://logo.png');
          msg.reply(exampleEmbed);
      }
      if(msg.content === '!sa helpmisc'){
         helpmisc(bot,msg)
      }
      if(msg.content === '!sa easteregg'){
         easteregg(bot,msg)
      }
      var array = msg.content.substring().split(' ');
      if(array[0]==="!sa" && array[1]==="easter" ){
         eastereggworker(bot,msg)
      }

      if(msg.content === '!sa helpmod'){
        if(permission(bot,msg)){
         msg.reply("I have sent you a DM of moderator commands."); 
         modcommands(bot,msg)
         }
         else {
           // msg.delete();
            msg.reply("\nTo ban people use !sa .....\noops!\nyou dont seem to be a moderator!!\nCommand not permitted"); 
         }
      }


      if(msg.content === `!sa talk`){
         msg.reply('Hi, I have messaged the support group. You should receive a new message soon. \nStay Strong\nWe love you :heart: ');
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
        const randomNum = 1;
        //const randomNum = (Math.floor(Math.random()* 10)+1).toString(); // random no 1-10  
         const breath = "breath"+`${randomNum}`+".gif"
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
         }
         exampleEmbed.setFooter('Mysa- Project Mental Health', 'attachment://logo.png');
          msg.reply(exampleEmbed);
      }
      ///heal bot-end
     //CONFESSION BOT
     if(msg.channel.id  === confessHere){ //identify #confess-here 
         const newMsg = msg;
         msg.delete();
         const toConfessions = bot.channels.cache.find(channel =>channel.id === confessions);
         const userTag  =  newMsg.author.tag;
         toConfessions.send({embed: {
             color: 3447003,
             title: `New Confession `,
             fields: [
              { name: "@" + 'moderator' + " " , value:" please take care"},
              { name: `From: ${userTag}`, value:`Message: \n${newMsg}`},
            ]
          }
        });
     }
 })
 bot.login(token);