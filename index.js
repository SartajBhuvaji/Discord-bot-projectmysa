 const Discord = require('discord.js');
 const config = require("./config.json");
 const bot = new Discord.Client();
 const token = config.BOT_TOKEN;
 const prefix = config.PREFIX;
 const confessHere  = config.confessHereToken; //FROM
 const confessions  = config.confessionsToken; //TO
 const privateMessage = require('./private-message');
 const { get } = require("snekfetch"); 

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
            { name: "Coded by", value: " @SartajBhuvaji", inline : true}
           
	      )
         .setFooter('Mysa- Project Mental Health', 'attachment://logo.png')
        // .react(`✅`);
         member.send(exampleEmbed);
    //console.log(member);
 })

 bot.on('message', msg=>{
    if(msg.content === "!sa master"){
       console.log('In pvt msg')
     privateMessage(bot,'!sa personalmsg','Pong')
   }
     if (msg.author.bot) return;
     if(msg.content === "!sa hi"){
        msg.reply('Hello from the local server')       
     }
     if(msg.content === "!sa master"){
        msg.reply('I was made by Sartaj')       
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
     //Heal bot
     // bug: gif file not loading
      if(msg.content=== "!sa help"){
         const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
         const exampleEmbed = new Discord.MessageEmbed()
	      .setColor('#0099ff')
	      .setTitle('Projectmysa')
	      .setURL('https://www.instagram.com/projectmysa/')
	      //.setAuthor('Sartaj', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	      .setDescription('Hi, projectmysa bot is a fun and easy-to-use Mental Health Support Bot for confessions, help, hugs, and more!')
         .attachFiles(attachment)
	      .setThumbnail('attachment://logo.png')
      	.addFields(
            { name: 'How to find and use commands', value: "My prefix is ``!sa`` \nTo get started, please type one of the commands below."},
            //{ name: '\u200B', value: '\u200B' },
	      	{ name: "``!sa talk``", value: 'Find someone to talk to.\n', inline: false },
	      	{ name: "```!sa breath```", value: 'Breath wizard, to calm yourself.', inline: false },
            { name: "```!sa cat```", value: 'Cute cat image attacks.', inline: false },
            { name: "```!sa selfcare```", value: 'Simple self care routine for you.', inline: false },
            { name: '\u200B', value: '\u200B' },
            { name: "Other Useful Links", value: '\u200B', inline: false },
            { name: "Instagram", value: " [@projectmysa](https://www.instagram.com/projectmysa/)", inline : true},
            { name: "Coded by", value: " @SartajBhuvaji", inline : true}
	      )
         .setFooter('Mysa- Project Mental Health', 'attachment://logo.png');
          msg.reply(exampleEmbed);
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
	      .setDescription('Hi, projectmysa bot is a fun and easy-to-use Mental Health Support Bot for confessions, help, hugs, and more!')
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
     //
 })
 bot.login(token);