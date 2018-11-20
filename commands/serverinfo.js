const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Informacion del server:")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Nombre:", message.guild.name)
    .addField("Fecha de creacion:", message.guild.createdAt)
    .addField("Entraste:", message.member.joinedAt)
    .addField("Miembros:", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
