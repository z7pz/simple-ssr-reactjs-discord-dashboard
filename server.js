const express = require('express');
const register = require('@react-ssr/express/register');
const Discord = require('discord.js');
const app = express();
const client = new Discord.Client();
app.use(express.static('public'));
const obj = new Object();
(async () => {
  await client.login('YOUR_BOT_TOKEN_HERE')
  await register(app);

  client.on('ready', () => {
    console.log('bot is ready')
    app.get('/', (req, res) => {
      res.render('index', { guilds: (client.guilds.cache) });
    });
    
    app.listen(3000, () => {
      console.log('> Ready on http://localhost:3000');
    });
  })
})();
