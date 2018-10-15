const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let role = message.guild.roles.find(role => role.name === "invite");

    if(message.member.roles.find('name', 'invite')){
        message.member.removeRole(role)
        message.reply(`Tu n'a plus le rôle Invité`)
    }
    else {
        message.member.addRole(role)
        message.reply(`Felicitation. Tu est un(e) Intvité(e) de la Guilde !!`)
    }

}