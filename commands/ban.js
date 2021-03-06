const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
    if(args[0] == "help"){
      message.reply("Uso: !ban <usuario> <razon>");
      return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return errors.cantfindUser(message.channel);
    if(bUser.id === bot.user.id) return errors.botuser(message); 
    let bReason = args.join(" ").slice(22);
    if(!bReason) return errors.noReason(message.channel);
    if(bUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, bUser, "MANAGE_MESSAGES");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Se baneo al usuario", `${bUser} con la ID ${bUser.id}`)
    .addField("Baneado por", `<@${message.author.id}> con la ID ${message.author.id}`)
    .addField("Baneado en", message.channel)
    .addField("Hora:", message.createdAt)
    .addField("Razon:", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "incidentes");
    if(!incidentchannel) return message.channel.send("No se pudo encontrar el canal incidentes.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
