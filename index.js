const Discord = require('discord.js');
const client = new Discord.Client ();
const fs = require("fs");


const prefix = '<';
const ownerID = '197821972703477781';

let xp = require("./xp.json");
let purple = ("./botconfig.purple");

client.login("NTAwOTg0NTc1NDY4NTAzMDQw.DqaBDA.TQDEsXHb7vGpWDsr0ipETB_CNFU");

client.on("ready", () =>{
    console.log("Launched");
    client.user.setActivity("Have Big Boobs");

});

client.on("guild.guildMemberAdd", member => {
    member.createDM().then(function (channel) {
        return channel.send(`Salutation ${member.displayName} Sur le Discord HyperDimension. 
        Si tu est un member de la guilde utilise <novice Si non <invite dans le channel #Bienvenue.\n
        Pense à vérifier le channel #Rules pour prendre connaissance du règlement.`)
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
    
    let xpAdd = Math.floor(Math.random() * 7) + 8;
        console.log(xpAdd);

    if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor(purple)
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
});
         
    
    let commandFile = require(`./commands/${cmd}.js`); 
    
    commandFile.run(client, message, args, ops);
 
} catch (e) 

{ console.log(e.stack); 

}
});
