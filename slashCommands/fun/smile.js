const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
	name: 'smile',
	description: "Envoie un gif qui sourie",
	cooldown: 3000,
	type: ApplicationCommandType.ChatInput,
    category: "fun",
	run: async (client, interaction) => {
            
                const member = interaction.member;

                var rando_imgssmile = [
                    'https://media.tenor.com/images/638a648136ae945f6150d674194d0cc8/tenor.gif',
                    'https://media.tenor.com/images/bd549ebf694a537c2d376402be85f06b/tenor.gif',
                    'https://media.tenor.com/images/f9b62fa809db163e57f5975ddaf9b054/tenor.gif',
                    'https://media.tenor.com/images/b5f08ae7f50a00f33d0219648e3fde08/tenor.gif',
                    'https://media.tenor.com/images/09c25d681122b9dfdd0710a20c4dfbbd/tenor.gif',
                    'https://media.tenor.com/images/7cb5e535bcade89f2979cd3dd3bfde5a/tenor.gif',
                    'https://media.tenor.com/images/7a15e5fa64b4b2b4dde8554339d3cfa0/tenor.gif',
                    'https://media.tenor.com/images/7267401d66397aca395af6b543bfb989/tenor.gif',
                    'https://media.tenor.com/images/f2624eff04dc3b2f84b8b3830fbdaa29/tenor.gif',
                    'https://media.tenor.com/images/4ea5a1f32764091f5c433bf0b1c778d1/tenor.gif',
                    'https://media.tenor.com/images/769fede93ec2f2293dadca1e0449eb50/tenor.gif',
                    'https://media1.tenor.com/images/bea3f6e41c736db4a99c79c64c46104b/tenor.gif?itemid=4382407',
                    'https://media.tenor.com/images/8c94985390b64dd1ceb127d085ebab43/tenor.gif',
                    'https://media.tenor.com/images/5fc2ce81bf7e62d9fe181084d81c8962/tenor.gif',
                    'https://media.tenor.com/images/8541813819e9e3c651e6d9baffe77a39/tenor.gif'
                ];
                var smilefinal = rando_imgssmile[Math.floor(Math.random() * rando_imgssmile.length)];
        


                const embed = new EmbedBuilder()
                .setColor("#03fcdb")
                .setDescription(`😥 ${member.user} ` + ' sourie ')
                .setImage(smilefinal)
        
                return interaction.reply({ embeds: [embed] })
    }
};
