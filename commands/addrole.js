const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("tu n'as pas les autorisations, bro !");

  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!rMember) return message.reply("Je ne trouve pas cet utilisateur");

  let role = args.join(" ").slice(22);

  if(!role) return message.reply("Specifie un rôle!");

  let gRole = message.guild.roles.find(`name`, role);

  if(!gRole) return message.reply("Je ne trouve pas ce rôle.");

  if(rMember.roles.has(gRole.id)) return message.reply("Il à déjà ce rôle.");
  await(rMember.addRole(gRole.id));


  try {
    await rMember.send(`Félicitations, Tu a reçu le rôle ${gRole.name}`)
  }catch(e){
    message.channel.send(`Bravo à <@${rMember.id}>, il a reçu le rôle ${gRole.name}. J'ai essayé de le MP, mais ses MP sont bloqués.`)
  }
}
