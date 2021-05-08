const { MessageReaction } = require("discord.js");
const Discord = require('discord.js');
const { merge } = require("snekfetch");
const fs = require('fs');
const path = require('path');
let rawdata = fs.readFileSync(path.resolve(__dirname, 'eastereggdata.json'));
let data = JSON.parse(rawdata);
var counter1 = data.counter1;
var counter2 = data.counter1;
var counter3 = data.counter3;
randomDigit = data.randomDigit;
console.log(randomDigit)

module.exports = (bot,msg)=>{
    var array = msg.content.substring().split(' ');
     if(array[0]==="!sa" && array[1]==="easter"&& array[3]){
       if(array[2]==="1"){
           if(randomDigit.find(no => no  === array[3] )){ // find array 3 in data.random nos
               //lucky
               msg.reply("congrats!!!")
               //remove the element from array
               const index = randomDigit.indexOf(array[3]);
                if (index > -1) {
                    randomDigit.splice(index, 1);
                    console.log(randomDigit)
                }
                //write to json ->pending
           }
           else{
               return;
           }
       }
       if(array[2]==="2"){
           if(array[3] === "csgo"){
            msg.reply("congrats!!!")
           }

       }
       if(array[2]==="3"){
        if(array[3] === "010121"){
         msg.reply("congrats!!!")
        }
    }

    } else{
        msg.reply("Invalid para!!!") 
    }
       
 }
