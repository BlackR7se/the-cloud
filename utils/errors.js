const Discord = require("discord.js");
const fs = require("fs");
let config = require("../botconfig.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Permisos insuficientes 🔒")
        .setColor(config.red)
        .addField("Necesitas permisos ", perm);

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(config.red)
        .setTitle("Error ❌")
        .addField(`${user} tiene permisos`, perms);

    message.channel.send(embed).then(m => m.delete(5000));

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error ❌")
        .setDescription("No puedes banear un bot 🤖")
        .setColor(config.red);

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error ❌")
        .setDescription("Usuario no encontrado 🕵️‍♂️")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}

module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error ❌")
        .setDescription("Porfavor, pon una razon 📨")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}
