const Discord = require('discord.js');
const bot = new Discord.Client();

    //signing up
    if(message.channel.name == 'signups') {
        
        if (message.author.equals(bot.user)) return;
        let aliverole = message.guild.roles.find("name", 'ALIVE');
        let spectatorrole = message.guild.roles.find("name", 'Spectator');

        if(message.member.roles.has('424744518127190016')) {
            message.channel.send('You are already signed up');
        }
          if(message.member.roles.has('424745598391156739')) {
            message.member.addRole(aliverole).catch(console.error);
            message.member.removeRole(spectatorrole).catch(console.error);
            message.channel.send('You are now signed up.');
          }
    }
});
client.login(process.env.BOT_TOKEN);
