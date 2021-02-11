<h1 align="center">discord-antiLang</h1>
<p align="center">Better Language Filter For Discord.js</p>

## 📝 Description
Language filter for discord bots using discord.js  
Tested using v12.5.1  
Uses RegExp to find bad words, so there are no false warnings (like "assignment" get taken as "ass").

## 🔧 Setup
Download the `antiLang.js` & `badwords.json` files and add them to your project.

## 📕 Usage
To require antiLang in your program do:
```
const antiLang = require("./anti-lang.js");
```

To pass message to filter, do:
```
bot.on("message", async message => {
    antiLang(client, message);
});
```
Note: You can edit the behaviour in the file:
```
const antiLangLevel = 1; // Available choices are [1, 2, 3, 4]. Others will give out warning and won't do anything.
```

## 👨‍⚖️ License
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)

[discord-antiLang](https://github.com/EEHoveckis/discord-antiLang) by [EEHoveckis](https://github.com/EEHoveckis) is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/). Permissions beyond the scope of this license may be available on request.
