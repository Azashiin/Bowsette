const Discord = require('discord.js');
const client = new Discord.Client ();
const fs = require("fs");


const prefix = '<';
const ownerID = '197821972703477781';

let xp = require("./xp.json");
let purple = ("./botconfig.purple");

client.login(process.env.TOKEN);

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
    
    if(message.content.starstWith(prefix + "boobs")) {
            var boobs = [

        "http://www.imagesyoulike.com/images/c/32x24/c5231.jpg",
        "http://www.steveaoki.com/site/wp-content/uploads/2016/01/boobs-lead-2.jpg",
        "https://thenypost.files.wordpress.com/2017/03/shutterstock.jpg?quality=90&strip=all&w=618&h=410&crop=1",
        "https://ae01.alicdn.com/kf/HTB18opcNpXXXXbXXpXXq6xXFXXXo/Denise-Milani-Hot-Sexy-Bikini-Big-Boobs-Art-Huge-Print-Poster-TXHOME-D3815.jpg_640x640.jpg",
        "https://cdn2.img.sputniknews.com/images/106741/85/1067418538.jpg",
        "https://i.ebayimg.com/images/g/utsAAOSwR5dXTF7A/s-l300.jpg",
        "http://www.fitnessprofitladder.com/wp-content/uploads/2016/02/Can-talking-about-boobs-help-you-get-more-clients.jpg",
        "https://i.ebayimg.com/images/g/kH0AAOSwn-tZKYK2/s-l300.jpg",
        "http://www.imagesyoulike.com/images/c/32x24/c0450.jpg",
        "https://afinde-production.s3.amazonaws.com/uploads/boobs.jpeg",
        "https://media.giphy.com/media/Xbg4XcUCbonyU/giphy.gif",
        "http://scandalplanet.com/wp-content/uploads/2017/12/07-Elizabeth-Anne-Nude-Leaked.jpg",
        "https://www.bigtitsgallery.net/wp-content/uploads/2016/08/big-tits-blonde-milf-mom.jpg",
        "https://pbs.twimg.com/media/Cq-Ln4ZWIAESx28.jpg",
        "http://nudebabes.realnakedgirls.net/wp-content/uploads/2018/03/rngnakedwhitebabe-1521678207lcp48-700x1102.jpg",
        "https://static.pulse.ng/img/incoming/origs5379776/9175566923-w644-h429/b62289334847048567840ce1a18d4bc0.jpg",
        "https://yagbu.net/images/c61a12d6b4f9f73b39eb8e0187657b22.jpg",
        "https://images.sex.com/images/pinporn/2017/08/01/300/18138760.gif",
        "https://images.sex.com/images/pinporn/2016/07/08/620/16094547.gif",
        "https://media.tits-guru.com/images?uuid=1449eb37-6ffa-46fe-bb3d-549a05ebeb8b",
        "https://www.celebjihad.com/gifs/jessica_nigri.gif",
        "http://vintage-calc.info/img/455162.gif",
        "https://commentseduire.net/wp-content/uploads/2017/06/blonde-with-big-boobs.gif",
        "https://media.tits-guru.com/images?uuid=3267509a-644f-40e8-bbd4-68d72c09360d",
        "http://zakutok.info/images/milena-velba-nude-boobs-gif-2.gif"








    ];

var tits = boobs[Math.floor(Math.random() * boobs.length)];

var boobs_embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('BOOBS!!')
.setImage('tits')

message.channel.send(boobs_embed)
};
   
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
