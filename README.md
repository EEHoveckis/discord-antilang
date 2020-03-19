# discord-antilang
JS Language Filter For Discord.js
Tested on Discord.js v12

## How to use
1. Download and add the `anti-lang.js` & `local-config.json` to your project. (Don't forget to link them in the main file.)
2. Add these lines to your code:
```
bot.on("ready", async () => {
    antiLang(bot);
    //other stuff you need
});
```
3. Add these lines to your code:
```
bot.on("message", async message => {
    bot.emit('checkLang', message);
    //other stuff you need
});
```
4. Edit the values in `local-config.json`:
```
{
  "logsguild": "123456789123456789", <-- Your Guild ID
  "chatLogsChannel": "123456789123456789", <-- Channel where you want embed to be sent. (Must be in the guild)
  "botThumbnail": "https://i.imgur.com/7SXfhTG.png" <-- Picture that you want the embed to show.
}
```
## Not using localconfig
You can instead just use simple strings and ditch the `local-config.json`.
```
localconfig.botThumbnail --> "https://i.imgur.com/7SXfhTG.png"
localconfig.logsguild --> "123456789123456789"
localconfig.chatLogsChannel --> "123456789123456789"
```
## Bug Reports
If you have any bugs or trouble setting the module up, feel free to open an issue on Github
