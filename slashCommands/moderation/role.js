const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
	name: 'role',
	description: "Gérer les rôles du serveur ou des membres.",
	cooldown: 3000,
	type: ApplicationCommandType.ChatInput,
    category: "moderation",
    	default_member_permissions: 'ManageRoles', // permission required
	options: [
        {
            name: 'add',
            description: 'Ajouter un rôle à un utilisateur.',
            type: 1,
            options: [
                {
                    name: 'role',
                    description: 'Le rôle que vous souhaitez ajouter à l\'utilisateur.',
                    type: 8,
                    required: true
                },
                {
                    name: 'user',
                    description: 'L\'utilisateur auquel vous souhaitez ajouter un rôle.',
                    type: 6,
                    required: true
                }
            ]
        }
    ],
	run: async (client, interaction) => {
	 if(interaction.options._subcommand === 'add') {
            try {
                const member = interaction.guild.members.cache.get(interaction.options.get('user').value);
                const role = interaction.options.get('role').role;
    
                await member.roles.add(role.id);
                const embed = new EmbedBuilder()
                .setTitle('Role Added')
                .setDescription(`Ajouté avec succès le rôle : ${role} à ${member}`)
                .setColor('#03fcdb')
                .setTimestamp()
                .setThumbnail(member.user.displayAvatarURL())
                .setFooter({ text: interaction.guild.name, iconURL: interaction.guild.iconURL() });
        
                return interaction.reply({ embeds: [embed] })
            } catch {
                return interaction.reply({ content: `Désolé, je n'ai pas réussi à vous ajouter ce rôle !`, ephemeral: true });
            }

        }
    }
};
