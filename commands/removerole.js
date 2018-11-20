const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if(args[0] == "help"){
    message.reply("Uso: !removerole <usuario> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("No se pudo encontrar al usuario.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Especifica un role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("No se encontro ese role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("El usuario no posee ese role.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`Desafortunadamente, perdiste el role ${gRole.name} 😔`)
  }catch(e){
    message.channel.send(`Desafortunadamente al usuario <@${rMember.id}>, se le quito el role ${gRole.name}. Intentamos contactarlo pero tiene los DMs bloqueados 😔`)
  }
}

module.exports.help = {
  name: "removerole"
}
