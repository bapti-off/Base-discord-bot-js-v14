const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
	name: 'kiss',
	description: "Embrasse un membre",
	cooldown: 3000,
	type: ApplicationCommandType.ChatInput,
    category: "fun",
	options: [
                {
                    name: 'membre',
                    description: 'Choisi la personne',
                    type: 6,
                    required: true
                }
    ],
	run: async (client, interaction) => {
            
                const member = interaction.guild.members.cache.get(interaction.options.get('membre').value)  || interaction.member;
                const users = interaction.member;

                var rando_imgskiss = [
                    'https://media.tenor.com/images/4ad024c4737a61ee33b2cc425291cfc1/tenor.gif',
                    'https://media.tenor.com/images/cebf4dc3536801abbbf4be8cc9d441f1/tenor.gif',
                    'https://media.tenor.com/images/d2fa4d8a14db8b1301efe79146cd64eb/tenor.gif',
                    'https://media.tenor.com/images/ddee55cec71038d1007fa33f4343c921/tenor.gif',
                    'https://media.tenor.com/images/a23d2ec86610bd1dd026a07853992b57/tenor.gif'
                ];
                var kissfinal = rando_imgskiss[Math.floor(Math.random() * rando_imgskiss.length)];


                const embed = new EmbedBuilder()
                .setColor("#03fcdb")
                .setDescription(`😚 ${users.user} ` + ' embrasse ' + `${member.user}`)
                .setImage(kissfinal)
        
                return interaction.reply({ embeds: [embed] })
    }
};
