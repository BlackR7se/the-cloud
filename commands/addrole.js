const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if (args[0] == "help") {
    message.reply("Uso: !addrole <usuario> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("Especifica un role!");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("No se pudo encontrar el role ❌");

  if (rMember.roles.has(gRole.id)) return message.reply("Ya tiene ese role ❌");
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`Felicitaciones, ahora tienes el role ${gRole.name} ✅`)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`Felicitaciones a <@${rMember.id}>, se le dio el role ${gRole.name}. Intentamos contactarlo , pero sus DMs estan bloqueados 😔`)
  }
}

module.exports.help = {
  name: "addrole"
}
