const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let role = message.guild.roles.find(role => role.name === "iam18");

    if(message.member.roles.find('name', 'iam18')){
        message.member.removeRole(role)
        message.reply(`Tu n'a plus le rôle Iam18`)
    }
    else {
        message.member.addRole(role)
        message.reply('Tu as desormais le rôle Iam18')
    }

}