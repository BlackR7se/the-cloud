const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Informacion del bot")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Nombre", bot.user.username)
    .addField("Creado a las", bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
