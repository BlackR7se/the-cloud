const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(args[0] == "help"){
      message.reply("Uso: !report <usuario> <razon>");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return errors.cantfindUser(message.channel);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reporta")
    .setColor(orange)
    .addField("Se reporto el usuario", `${rUser} con la ID: ${rUser.id}`)
    .addField("Fue reportado por", `${message.author} con la ID: ${message.author.id}`)
    .addField("Canal:", message.channel)
    .addField("Hora:", message.createdAt)
    .addField("Razon:", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("No se encontro el canal de reports.");
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
