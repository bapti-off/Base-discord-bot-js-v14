const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
	name: '8ball',
	description: "Pose une question à la boule magique",
	cooldown: 3000,
	type: ApplicationCommandType.ChatInput,
    category: "fun",
    options: [
        {
         name: "question",
         description: "Ecrit la question",
         required: true,
         type: 3,
        },
       ],
	run: async (client, interaction, args) => {
        try {
           
    const images = [
    ["Oui."],
    ["Il est certain"],
    ["Sans aucun doute"],
    ["Oui définitivement"],
    ["Vous pouvez vous y fier"],
    ["Comme je le vois oui"],
    ["Le plus probable"],
    ["Les perspectives ne sont pas si bonnes"],
    ["Les signes pointent vers Oui"],
    ["Répondez vaguement, réessayez"],
    ["Demander à nouveau plus tard"],
    ["Mieux vaut ne pas te le dire maintenant..."],
    ["Impossible de prédire maintenant"],
    ["Concentrez-vous et demandez à nouveau"],
    ["Ne comptez pas dessus"],
    ["Ma réponse est non"],
   ];
   const json = JSON.stringify(images);
   const parsed = JSON.parse(json);
   const random = Math.floor(Math.random() * parsed.length);
   const embed = new EmbedBuilder() // Prettier
    .setDescription(`>>> **Réponse:** ${parsed[random][0]}`)
    .setTimestamp()
    .setColor("#00b0f4")
    return interaction.reply({ embeds: [embed] })
  } catch (err) {
   console.log(err);
   return interaction.reply()
  }
 },
};
