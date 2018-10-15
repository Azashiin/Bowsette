const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let role = message.guild.roles.find(role => role.name === "novice");

    if(message.member.roles.find('name', 'novice')){
        message.member.removeRole(role)
        message.reply(`Tu n'a plus le rôle Novice`)
    }
    else {
        message.member.addRole(role)
        message.reply('Felicitation. Tu est un Novice de la Guilde !!')
    }

}