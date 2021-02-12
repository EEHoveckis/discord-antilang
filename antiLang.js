const Discord = require("discord.js");
const { badWords } = require("./badWords.json"); // Bad words file.
const antiLangLevel = 1; // AntiLang Level.
const muteRoleName = "MUTED"; // You can change the muterole name here.

module.exports = function(client, message) {
  // This takes the message and checks if it contains any of the bad words.
  for(var i = 0; i < badWords.length; i++) {
    var regexCase = new RegExp(`\\b${badWords[i]}\\b`, "gim");
    var found = regexCase.test(message.content);
    if(found) break;
  }
  if(found) { // If there is/are bad words in the message, do one of the actions depending on the level.
    switch (antiLangLevel) {
      case 1: // Just warns user.
        const warnUserEmbed = new Discord.MessageEmbed()
        .setColor("#ff9900")
        .setTitle(`${message.author.tag} was warned for __Bad language__!`);

        message.channel.send(warnUserEmbed);
        break;
      case 2: // Gives user "Muted" role, that way muting him. Currently does not auto-unmute.
        let muteRole = message.guild.roles.cache.find(r => r.name === muteRoleName);
        message.member.roles.add(muteRole.id);

        const muteUserEmbed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle(`${message.author.tag} was muted for __Bad language__!`);

        message.channel.send(muteUserEmbed);
        break;
      case 3: // Kicks user from the guild.
        const kickUserEmbed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle(`${message.author.tag} was kicked for __Bad language__!`);

        message.channel.send(kickUserEmbed);
        message.member.kick();
        break;
      case 4: // Bans user from the guild.
        const banUserEmbed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle(`${message.author.tag} was banned for __Bad language__!`);

        message.channel.send(banUserEmbed);
        message.member.ban();
        break;
      default:
        return console.log("[INCORRECT SETUP] - antiLangLevel value can only be [1, 2, 3, 4]!\nCheck antiLang.js for more information!");
    }
  }
};
