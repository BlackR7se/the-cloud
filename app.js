var Discord = require('discord.js');
var bot = new Discord.Client();
var fs = require('fs');
var profanities = require('profanities')

//UserData
var userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));
//CommandsList
var commandsList = fs.readFileSync('Storage/commands.txt', 'utf8');

//Functions
function userInfo(user) {
  var finalString = '';

  finalString += 'La **ID** de **' + user.username + '**, es** ' + user.id + '**';

  return finalString;
}

bot.on('message', message => {

  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '!'

  if (!message.content.startsWith(prefix))

  //Help
  if (msg === prefix + 'HELP' || msg === prefix + 'CMDS') {
    message.author.send({embed:{
      title:"Comandos:",
      description:"" + commandsList,
      color: 0x2E57FF
    }})
  }
  //ping-pong
  if (msg === prefix + 'PING') {
  message.channel.send({embed:{
    title:"Ping!",
    description:"Pong!",
    color: 0x2E57FF
  }})
}
//Profanity
for (x = 0; x < profanities.length; x++) {
  if (message.content.toUpperCase() == profanities[x].toUpperCase()) {
    message.author.send({embed:{
      title:"Mensaje Borrado",
      description:"Cuida tu Lenguage, **"+ message.author.username + "** 🤬",
      color: 0x2E57FF
    }})
    message.delete();
    return;
  }
}
//userinfo
if (msg.startsWith(prefix + 'USERINFO')) {
  if (msg === prefix + 'USERINFO') {
    message.channel.send(userInfo(sender));

  }
}
//userstats
if (msg == prefix + 'USERSTATS') {
  message.channel.send({embed:{
    title:"**" + message.author.username + "** Envio:",
    description:"**" + userData[sender.id].messagesSent + "** Mensajes!",
    color: 0x2E57FF
  }})
}
//banning words
 if (sender.id === '514130658512076801') {
   return;
 }
if (msg.includes('PUTO')) {
  message.delete();
  message.author.send({embed:{
    title:"Mensaje Borrado",
    description:"Cuida tu Lenguage, **"+ message.author.username + "** 🤬",
    color: 0x2E57FF
  }})
}
if (msg.includes('MIERDA')) {
  message.delete();
  message.author.send({embed:{
    title:"Mensaje Borrado",
    description:"Cuida tu Lenguage, **"+ message.author.username + "** 🤬",
    color: 0x2E57FF
  }})
}
if (msg.includes('CABRON')) {
  message.delete();
  message.author.send({embed:{
    title:"Mensaje Borrado",
    description:"Cuida tu Lenguage, **"+ message.author.username + "** 🤬",
    color: 0x2E57FF
  }})
}
if (msg.includes('PERRA')) {
  message.delete();
  message.author.send({embed:{
    title:"Mensaje Borrado",
    description:"Cuida tu Lenguage, **"+ message.author.username + "** 🤬",
    color: 0x2E57FF
  }})
}
if (msg.includes('CABRONA')) {
  message.delete();
  message.author.send({embed:{
    title:"Mensaje Borrado",
    description:"Cuida tu Lenguage, **"+ message.author.username + "** 🤬",
    color: 0x2E57FF
  }})
}
if (msg.includes('PENE')) {
  message.delete();
  message.author.send({embed:{
    title:"Mensaje Borrado",
    description:"Cuida tu Lenguage, **"+ message.author.username + "** 🤬",
    color: 0x2E57FF
  }})
}
if (msg.includes('VAGINA')) {
  message.delete();
  message.author.send({embed:{
    title:"Mensaje Borrado",
    description:"Cuida tu Lenguage, **"+ message.author.username + "** 🤬",
    color: 0x2E57FF
  }})
}
if (msg.includes('CULO')) {
  message.delete();
  message.author.send({embed:{
    title:"Mensaje Borrado",
    description:"Cuida tu Lenguage, **"+ message.author.username + "** 🤬",
    color: 0x2E57FF
  }})
}
if (msg.includes('TETAS')) {
  message.delete();
  message.author.send({embed:{
    title:"Mensaje Borrado",
    description:"Cuida tu Lenguage, **"+ message.author.username + "** 🤬",
    color: 0x2E57FF
  }})
}
if (!userData[sender.id]) userData[sender.id] = {
  messagesSent: 0
}
userData[sender.id].messagesSent++;
fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
   if (err) console.error(err);
});

});

bot.on('ready', () => {
  console.log('Made by Edge#8251');

});
bot.on('guildMemberAdd', member => {
  console.log('User ' + member.user.username + ' has joined the Server!')

  var role = member.guild.roles.find('name', 'Miembro');

  member.addRole(role)

  member.guild.channels.get('514148487827554304').send({embed:{
    title:"Bienvenido, **"+ member.user.username + "**" ,
    description:"a The Cloud Community 👋",
    color: 0x2E57FF
  }})
});
bot.on('guildMemberRemove', member => {
  member.guild.channels.get('514148487827554304').send({embed:{
    title:"Adios, **"+ member.user.username + "**..",
    description:"Te extrañaremos 😭",
    color: 0x2E57FF

  }})
});




//login
bot.login('NTE0MTMwNjU4NTEyMDc2ODAx.DtSFuw.8Xt_Y823KELF9kyadjtOZeI9CA0')
