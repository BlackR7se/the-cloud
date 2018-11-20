const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
    if(args[0] == "help"){
      message.reply("Uso: !kick <user> <reason>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return errors.cantfindUser(message.channel);
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, kUser, "MANAGE_MESSAGES");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Se kickeo al usuario", `${kUser} con la ID ${kUser.id}`)
    .addField("Kickeado Por", `<@${message.author.id}> con la ID ${message.author.id}`)
    .addField("Kickeado en", message.channel)
    .addField("Hora:", message.createdAt)
    .addField("Razon:", kReason);

    let kickChannel = message.guild.channels.find(`name`, "incidentes");
    if(!kickChannel) return message.channel.send("No se pudo encontrar el canal incidentes.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
