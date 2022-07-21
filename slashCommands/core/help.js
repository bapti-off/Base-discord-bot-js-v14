const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'help',
	description: "Affiche la liste des commandes disponible",
	cooldown: 3000,
	type: ApplicationCommandType.ChatInput,
    category: "core",
	run: async (client, interaction) => {

                const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=8&scope=bot%20applications.commands`;

                const embed = new EmbedBuilder()
                    .setColor("#03fcdb")
                    .setTitle(`Projet {Engin}`)
                    .setThumbnail("https://i.imgur.com/PGSEC0S.png")
                    .setDescription(' Voici la liste complète des commandes disponible ').addFields([
					    { name: '<:info:998897408475926558>・Informations', value: '`/help` ➜ Affiche la liste des commandes\n`/ping` ➜ Répond pong' }
					])
                
                const INVITE = new ActionRowBuilder()
                .addComponents([
			        new ButtonBuilder()
			            .setLabel('Invite Moi')
			            .setURL(inviteUrl)
			            .setStyle(ButtonStyle.Link)
                        .setEmoji("🤖"),
                    new ButtonBuilder()
                        .setLabel('Site Web')
                        .setURL("https://fly-bot.space/")
                        .setStyle(ButtonStyle.Link)
                        .setEmoji("🌐"),
                    new ButtonBuilder()
                        .setLabel('Support')
                        .setURL("https://discord.gg/qKsmD2UP57")
                        .setStyle(ButtonStyle.Link)
                        .setEmoji("🆘")
                    ])

                return interaction.reply({ embeds: [embed], components: [INVITE] })
    }
};
