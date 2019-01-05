console.log("BOT ONLINE");
const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const spam2 = new Discord.Client();
const spam4 = new Discord.Client();

client.on('ready', () => {//Toxic Codes
    console.log(`Logged in as ${client.user.tag} !`);//Toxic Codes
          client.user.setActivity("by n3k4a|Premiumbot|Toxic Codes  .",{type: 'WATCHING'});//Toxic Codes
  //Toxic Codes
  });//Toxic Codes

bot.on('ready', () => {//Toxic Codes
    console.log(`Logged in as ${bot.user.tag} !`);//Toxic Codes
          bot.user.setActivity("by n3k4a|Premiumbot|Toxic Codes  .",{type: 'WATCHING'});//Toxic Codes
  //Toxic Codes
  });//Toxic Codes

spam2.on('ready', () => {//Toxic Codes
    console.log(`Logged in as ${spam2.user.tag} !`);//Toxic Codes
          spam2.user.setActivity("by n3k4a|Premiumbot|Toxic Codes  .",{type: 'WATCHING'});//Toxic Codes
  //Toxic Codes
  });//Toxic Codes

spam4.on('ready', () => {//Toxic Codes
    console.log(`Logged in as ${spam4.user.tag} !`);//Toxic Codes
          spam4.user.setActivity("by n3k4a|Premiumbot|Toxic Codes  .",{type: 'WATCHING'});//Toxic Codes
  //Toxic Codes
  });//Toxic Codes



const prefix = "1";

client.on("ready", () => {
let channel = client.channels.get("530751392168804375")
setInterval(function() {
channel.send(`I NEED CREDITS NOW`);
}, 999)
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


  if (command === "say") { /// اكتب البرفيكس ثم الامر
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }


});

client.login(process.env.BOT_TOKEN);
