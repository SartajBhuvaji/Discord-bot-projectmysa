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
     //Heal bot
     // bug: gif file not loading
      if(msg.content=== "!sa help"){
         const attachment = new Discord.MessageAttachment('./media/logo.png', 'logo.png');
         const exampleEmbed = new Discord.MessageEmbed()
	      .setColor('#0099ff')
	      .setTitle('Projectmysa')
	      .setURL('https://discord.js.org/')
	      //.setAuthor('Sartaj', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	      .setDescription('Hi, projectmysa bot is a fun and easy-to-use Mental Health Support Bot for confessions, help, hugs, and more!')
         .attachFiles(attachment)
	      .setThumbnail('attachment://logo.png')
      	.addFields(
            { name: 'How to find and use commands', value: "My prefix is ``!sa`` \nTo get started, please type one of the commands below."},
            //{ name: '\u200B', value: '\u200B' },
	      	{ name: "``!sa talk``", value: 'Find someone to talk to\n', inline: false },
	      	{ name: "```!sa breath```", value: 'Breath wizard, to calm yourself.', inline: false },
	      )
	      .addField('Inline field title', 'Some value here', true)
	      .setImage('https://i.imgur.com/wSTFkRM.png')
      	.setTimestamp()
	      .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
          msg.reply(exampleEmbed);

      }
      if(msg.content === `!sa talk`){
         msg.reply('Hi, I have messaged the support group. You should receive a new message soon. \nStay Strong\nWe love you :heart: ');
         msg.react(`✅`);
      // or create a new channel for the user with moderators in te user.     
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
      ///heal bot-end

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
