const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
	name: 'cry',
	description: "Envoie un gif qui pleur",
	cooldown: 3000,
	type: ApplicationCommandType.ChatInput,
    category: "fun",
	run: async (client, interaction) => {
            
                const member = interaction.member;

                var rando_imgscry = [
                    'https://media.tenor.com/images/84bb22e3b7290269d926a9cfd1d065f0/tenor.gif',
                    'https://media.tenor.com/images/5817dea73dd023ba1cc9b405f1577ebf/tenor.gif',
                    'https://media.tenor.com/images/54b3dd3e7e227afb0dd31738c11c1ead/tenor.gif',
                    'https://media.tenor.com/images/8b51f583ab3bb0580e80310affb45bfe/tenor.gif',
                    'https://media.tenor.com/images/70478bb418236d9e2e852372b61570c6/tenor.gif',
                    'https://media.tenor.com/images/5fed120e585f91aa2af29abb97251942/tenor.gif',
                    'https://media.tenor.com/images/d089193ac77e74bb3f8e2f23c24d712d/tenor.gif',
                    'https://media1.tenor.com/images/de730b51400ed4dfb66d04141ea79a2d/tenor.gif?itemid=7353410',
                    'https://media.tenor.com/images/52c4bfbe3ae9fbfcbc0e2975e78b481c/tenor.gif',
                    'https://media.tenor.com/images/47706b57d686be5ec9858a8af7203d11/tenor.gif',
                    'https://media.tenor.com/images/eac8a7b4a0e7c468a31274b80c3958a1/tenor.gif',
                    'https://media.tenor.com/images/ac8378dba1206383dc1ddc2a00c0183d/tenor.gif',
                    'https://media.tenor.com/images/9c7f40fb033338d0e68116c6a25f474a/tenor.gif'
                ];
                var cryfinal = rando_imgscry[Math.floor(Math.random() * rando_imgscry.length)];
        


                const embed = new EmbedBuilder()
                .setColor("#03fcdb")
                .setDescription(`😥 ${member.user} ` + ' pleur ')
                .setImage(cryfinal)
        
                return interaction.reply({ embeds: [embed] })
    }
};
