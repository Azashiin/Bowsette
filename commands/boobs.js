const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

var images = [ "http://www.imagesyoulike.com/images/c/32x24/c5231.jpg","http://www.steveaoki.com/site/wp-content/uploads/2016/01/boobs-lead-2.jpg","https://thenypost.files.wordpress.com/2017/03/shutterstock.jpg?quality=90&strip=all&w=618&h=410&crop=1","https://ae01.alicdn.com/kf/HTB18opcNpXXXXbXXpXXq6xXFXXXo/Denise-Milani-Hot-Sexy-Bikini-Big-Boobs-Art-Huge-Print-Poster-TXHOME-D3815.jpg_640x640.jpg","https://cdn2.img.sputniknews.com/images/106741/85/1067418538.jpg","https://i.ebayimg.com/images/g/utsAAOSwR5dXTF7A/s-l300.jpg","http://www.fitnessprofitladder.com/wp-content/uploads/2016/02/Can-talking-about-boobs-help-you-get-more-clients.jpg","https://i.ebayimg.com/images/g/kH0AAOSwn-tZKYK2/s-l300.jpg","http://www.imagesyoulike.com/images/c/32x24/c0450.jpg","https://afinde-production.s3.amazonaws.com/uploads/boobs.jpeg","https://media.giphy.com/media/Xbg4XcUCbonyU/giphy.gif","http://scandalplanet.com/wp-content/uploads/2017/12/07-Elizabeth-Anne-Nude-Leaked.jpg","https://www.bigtitsgallery.net/wp-content/uploads/2016/08/big-tits-blonde-milf-mom.jpg","https://pbs.twimg.com/media/Cq-Ln4ZWIAESx28.jpg","http://nudebabes.realnakedgirls.net/wp-content/uploads/2018/03/rngnakedwhitebabe-1521678207lcp48-700x1102.jpg","https://static.pulse.ng/img/incoming/origs5379776/9175566923-w644-h429/b62289334847048567840ce1a18d4bc0.jpg","https://yagbu.net/images/c61a12d6b4f9f73b39eb8e0187657b22.jpg","https://images.sex.com/images/pinporn/2017/08/01/300/18138760.gif","https://images.sex.com/images/pinporn/2016/07/08/620/16094547.gif","https://media.tits-guru.com/images?uuid=1449eb37-6ffa-46fe-bb3d-549a05ebeb8b","https://www.celebjihad.com/gifs/jessica_nigri.gif","http://vintage-calc.info/img/455162.gif","https://commentseduire.net/wp-content/uploads/2017/06/blonde-with-big-boobs.gif","https://media.tits-guru.com/images?uuid=3267509a-644f-40e8-bbd4-68d72c09360d","http://zakutok.info/images/milena-velba-nude-boobs-gif-2.gif"];

Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
};

let randomImage = images.random();

message.channel.send({ 
    embed: new Discord.RichEmbed()
        .setTitle('BOOBS !')
        .setImage(randomImage)
        .setColor('RANDOM')
        .setFooter('love it !')
}); 
}