const Discord = require('discord.js');
const client = new Discord.Client ();

const prefix = '<';
const ownerID = '197821972703477781';

client.login("NTAwOTg0NTc1NDY4NTAzMDQw.DqSyRA.P9akD4RwBa4mNEFBjAGpdBoLJUk");

client.on("ready", () =>{
    console.log("Launched");
    client.user.setActivity("Have Big Boobs");

});

client.on("guild.guildMemberAdd", member => {
    member.createDM().then(function (channel) {
        return channel.send(`Salutation ${member.displayName} Sur le Discord HyperDimension. Si tu est un member de la guilde utilise <novice Si non <invite dans le channel #Bienvenue.\nPense à vérifier le channel #Rules pour prendre connaissance du règlement.`)
    }).catch(console.error)
});

client.on('message', message => {
   
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    try { delete require.cache[require.resolve(`./commands/${cmd}.js`)]; 
    
    let ops = { 
        ownerID: ownerID, 
        
    } 
    
    let commandFile = require(`./commands/${cmd}.js`); 
    
    commandFile.run(client, message, args, ops);
 
} catch (e) 

{ console.log(e.stack); 

}
    });