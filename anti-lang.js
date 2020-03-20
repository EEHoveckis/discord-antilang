//Made by Edgars Eduards Hoveckis 2020
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const localconfig = JSON.parse(fs.readFileSync("./local-config.json", "utf8"));

module.exports = async (bot) => {
    bot.on("checkLang", async (message) => {
      let muterole = message.guild.roles.cache.find(r => r.name === "Muted");
       var re1 = /\bahole\b/igm.test(message.content);
       var re2 = /\banus\b/igm.test(message.content);
       var re3 = /\bass\b/igm.test(message.content);
       var re4 = /\bassface\b/igm.test(message.content);
       var re5 = /\basshole\b/igm.test(message.content);
       var re6 = /\basswipe\b/igm.test(message.content);
       var re7 = /\bbastard\b/igm.test(message.content);
       var re8 = /\bbitch\b/igm.test(message.content);
       var re9 = /\bbitches\b/igm.test(message.content);
       var re10 = /\bblowjob\b/igm.test(message.content);
       var re11 = /\bbutthole\b/igm.test(message.content);
       var re12 = /\bbuttwipe\b/igm.test(message.content);
       var re13 = /\bcock\b/igm.test(message.content);
       var re14 = /\bclit\b/igm.test(message.content);
       var re15 = /\bcockhead\b/igm.test(message.content);
       var re16 = /\bcock-sucker\b/igm.test(message.content);
       var re17 = /\bcocks\b/igm.test(message.content);
       var re18 = /\bcrap\b/igm.test(message.content);
       var re19 = /\bcum\b/igm.test(message.content);
       var re20 = /\bcunt\b/igm.test(message.content);
       var re21 = /\bcunts\b/igm.test(message.content);
       var re22 = /\bdick\b/igm.test(message.content);
       var re23 = /\bdicks\b/igm.test(message.content);
       var re24 = /\bdildo\b/igm.test(message.content);
       var re25 = /\bdildos\b/igm.test(message.content);
       var re26 = /\bfuck\b/igm.test(message.content);
       var re27 = /\bfucker\b/igm.test(message.content);
       var re28 = /\bfuckers\b/igm.test(message.content);
       var re29 = /\bfucking\b/igm.test(message.content);
       var re30 = /\bfaggot\b/igm.test(message.content);
       var re31 = /\bfags\b/igm.test(message.content);
       var re32 = /\bfaggots\b/igm.test(message.content);
       var re33 = /\bfag\b/igm.test(message.content);
       var re34 = /\bjizz\b/igm.test(message.content);
       var re35 = /\bjackoff\b/igm.test(message.content);
       var re36 = /\bjerk-off\b/igm.test(message.content);
       var re37 = /\blesbian\b/igm.test(message.content);
       var re38 = /\blipshit\b/igm.test(message.content);
       var re39 = /\bmasochist\b/igm.test(message.content);
       var re40 = /\bmasterbate\b/igm.test(message.content);
       var re41 = /\bmother-fucker\b/igm.test(message.content);
       var re42 = /\bmotherfucker\b/igm.test(message.content);
       var re43 = /\bmotherfuckers\b/igm.test(message.content);
       var re44 = /\bmother-fuckers\b/igm.test(message.content);
       var re45 = /\bnigger\b/igm.test(message.content);
       var re46 = /\bnigga\b/igm.test(message.content);
       var re47 = /\borgasm\b/igm.test(message.content);
       var re48 = /\bpenis\b/igm.test(message.content);
       var re49 = /\bpussy\b/igm.test(message.content);
       var re50 = /\brecktum\b/igm.test(message.content);
       var re51 = /\bsadist\b/igm.test(message.content);
       var re52 = /\bscank\b/igm.test(message.content);
       var re53 = /\bsex\b/igm.test(message.content);
       var re54 = /\bsexy\b/igm.test(message.content);
       var re55 = /\bshit\b/igm.test(message.content);
       var re56 = /\bshity\b/igm.test(message.content);
       var re57 = /\bslag\b/igm.test(message.content);
       var re58 = /\bslut\b/igm.test(message.content);
       var re59 = /\bvagina\b/igm.test(message.content);
       var re60 = /\bwhore\b/igm.test(message.content);
       var re61 = /\bxxx\b/igm.test(message.content);
       var re62 = /\bxrated\b/igm.test(message.content);
       var re63 = /\bboobs\b/igm.test(message.content);
       var re64 = /\bboob\b/igm.test(message.content);
       var re65 = /\bporn\b/igm.test(message.content);
       var re66 = /\btesticles\b/igm.test(message.content);
       var re67 = /\btwat\b/igm.test(message.content);
       var re68 = /\byed\b/igm.test(message.content);
       var re69 = /\bnazi\b/igm.test(message.content);
       var re70 = /\bnazis\b/igm.test(message.content);
       var re71 = /\bkkk\b/igm.test(message.content);
       var re72 = /\bshemale\b/igm.test(message.content);
       var re73 = /\bzabourah\b/igm.test(message.content);
       var re74 = /\bassfuck\b/igm.test(message.content);

        if (re1 == true || re2 == true || re3 == true || re4 == true || re5 == true || re6 == true ||re7 == true || re8 == true || re9 == true || re10 == true || re11 == true || re12 == true || re13 == true || re14 == true || re15 == true || re16 == true || re17 == true || re18 == true || re19 == true || re20 == true || re21 == true || re22 == true || re23 == true || re24 == true || re25 == true || re26 == true || re27 == true || re28 == true || re29 == true || re30 == true || re31 == true || re32 == true || re33 == true || re34 == true || re35 == true || re36 == true || re37 == true || re38 == true || re39 == true || re40 == true || re41 == true || re42 == true || re43 == true || re44 == true || re45 == true || re46 == true || re47 == true || re48 == true || re49 == true || re50 == true || re51 == true || re52 == true || re53 == true || re54 == true || re55 == true || re56 == true || re57 == true || re58 == true || re59 == true || re60 == true || re61 == true || re62 == true || re63 == true || re64 == true || re65 == true || re66 == true || re67 == true || re68 == true || re69 == true || re70 == true || re71 == true || re72 == true || re73 == true || re74 == true){

               message.member.roles.add(muterole);
               message.channel.send(`${message.author.username} Has Been Muted For 1 Hour For Language. :mute:`);

               let ChatFilterModEmbed = new Discord.MessageEmbed()
               .setColor("#000001")
               .setAuthor("Colosse PE ChatLogs")
               .addField("Moderation:", "Mute", true)
               .addField("Muted Person:", message.author.username, true)
               .setThumbnail(localconfig.botThumbnail)
               .addField("Reason:", "Language", true)
               .addField("Moderator:", bot.user.username)
               .addField("Message Sent:", message.content)

               bot.guilds.resolve(localconfig.logsguild).channels.resolve(localconfig.chatLogsChannel).send({embed: ChatFilterModEmbed});
            setTimeout(() => {
               if(message.member.roles.cache.some(r=>["Muted"].includes(r.name)) ) {
                  message.member.roles.remove(muterole);
                  message.channel.send(`${message.author.username} Has Been Unmuted. :sound:`);
               } else {
                  console.log(`[LOGS] Tried Unmuting a user ${message.author.username}, but user was already unmuted!`);
               }}, 1 * 3600000);
       }
    });
}
