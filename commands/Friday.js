const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const exampleEmbed = new MessageEmbed();
exampleEmbed.setColor('#ffffff'),
exampleEmbed.setTitle('Програма за петък'),
exampleEmbed.setThumbnail('https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png'),
exampleEmbed.addFields(
	{ name: '1.Алгоритми', value: '[13:20 - 14:00](https://meet.google.com/ggx-oozp-opy)' },
	{ name: '2.Български', value: '[14:10-14:50](https://meet.google.com/lookup/f5v5zmipja)' },
	{ name: '3.ООП', value: '[15:00-15:40](https://meet.google.com/kgn-raxv-sgt)/[15:00-15:40](https://meet.google.com/uup-hjdu-sii)' },
	{ name: '4.Математика(Анализ)', value: '[16:00-16:40](https://meet.google.com/lookup/pkp-aijr-xwg)' },
	{ name: '5.Математика(Анализ)', value: '[16:50-17:30](https://meet.google.com/lookup/pkp-aijr-xwg)' },
	{ name: '6.Български(Профил)', value: '[17:35-18:15](https://meet.google.com/lookup/f5v5zmipja)' },
	{ name: '7.Български(Профил)', value: '[18:20 - 19:00](https://meet.google.com/lookup/f5v5zmipja)' },
);


module.exports = {
	data: new SlashCommandBuilder()
		.setName('petuk')
		.setDescription('Replies with programm for Friday!'),
	async execute(interaction) {
		await interaction.reply({ embeds: [exampleEmbed] });
	},
};