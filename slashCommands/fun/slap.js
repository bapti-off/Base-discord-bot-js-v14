const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
	name: 'slap',
	description: "Giffle un membre",
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
    run: async (client, interaction, message) => {

        const member = interaction.guild.members.cache.get(interaction.options.get('membre').value)  || interaction.member;
        const users = interaction.member

        var rando_imgsslap = [
            'https://media.tenor.com/images/4ad024c4737a61ee33b2cc425291cfc1/tenor.gif',
            'https://media.tenor.com/images/cebf4dc3536801abbbf4be8cc9d441f1/tenor.gif',
            'https://media.tenor.com/images/d2fa4d8a14db8b1301efe79146cd64eb/tenor.gif',
            'https://media.tenor.com/images/ddee55cec71038d1007fa33f4343c921/tenor.gif',
            'https://media.tenor.com/images/21fed1c94754d21acdbccd52adfb53d0/tenor.gif',
            'https://media.tenor.com/images/5fae48a5065440df87efb803cf8e43ce/tenor.gif',
            'https://media.tenor.com/images/6e4be7dcabb41ee76f2372f0492fc107/tenor.gif',
            'https://media.tenor.com/images/02b3ad0fb1d6aa77daeee0ace21d5774/tenor.gif',
            'https://media.tenor.com/images/29b22bb26ecc0943c95b9a1be81d3054/tenor.gif',
            'https://media.tenor.com/images/197df534507bd229ba790e8e1b5f63dc/tenor.gif',
            'https://media.tenor.com/images/8ec7bf76ee3381bf7f6ec4a63397cbf0/tenor.gif',
            'https://media.tenor.com/images/c9fba5642c0d4984d8c44c8cc62826cd/tenor.gif',
            'https://media.tenor.com/images/f2cef6ceb6f7d898142a423822fec28d/tenor.gif',
            'https://media.tenor.com/images/55d3a2536717546ae49c1e54af15f1b0/tenor.gif',
            'https://media.tenor.com/images/556f881d184f4dbfc4f99ae720273457/tenor.gif',
            'https://media.tenor.com/images/1e62124baa07326a20127730fd61a464/tenor.gif',
            'https://media.tenor.com/images/4b75a7e318cb515156bb7bfe5b3bbe6f/tenor.gif',
            'https://media.tenor.com/images/25359520a0973f896b002689ed90db8d/tenor.gif',
            'https://media.tenor.com/images/1f9175e76488ebf226de305279151752/tenor.gif',
            'https://media.tenor.com/images/7788dae5026b45fc269c06b22c0bfad3/tenor.gif',
            'https://media.tenor.com/images/a23d2ec86610bd1dd026a07853992b57/tenor.gif',
            'https://media.tenor.com/images/ce8b8d26668bf7af8c336bf4f52a4f24/tenor.gif',
            'https://media.tenor.com/images/dd777838018ab9e97c45ba34596bb8de/tenor.gif',
            'https://media.tenor.com/images/8e75574d9a85f2e550ccbef62f291544/tenor.gif',
            'https://media.tenor.com/images/347f111da7827beb402fd9f208d79211/tenor.gif',
            'https://media.tenor.com/images/f9549d4734daeb128611104954e72185/tenor.gif',
            'https://media.tenor.com/images/4412c49ca4e96bc0489c89571a9e1857/tenor.gif',
            'https://media.tenor.com/images/bd3bb6290ccf67c8051448a3bd0a48fa/tenor.gif',
            'https://media.tenor.com/images/9fb52dbfd3b7695ae50dfd00f5d241f7/tenor.gif',
            'https://media.tenor.com/images/be2b3298bc9880b9ffcdc7a47635fff6/tenor.gif',
            'https://media.tenor.com/images/a23d2ec86610bd1dd026a07853992b57/tenor.gif'
        ];
        var slapfinal = rando_imgsslap[Math.floor(Math.random() * rando_imgsslap.length)];

        const embed = new EmbedBuilder()
            .setColor('#03fcdb')
            .setDescription(`🖐 ${users.user} ` + ' giffle ' + `${member.user}`)
            .setImage(slapfinal)

            return interaction.reply({ embeds: [embed] })
        }
    };