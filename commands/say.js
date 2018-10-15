module.exports.run = async (client, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);
};
const channel = client.channels("501421014362882068")
channel.send(message)
