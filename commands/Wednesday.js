const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const exampleEmbed = new MessageEmbed();
exampleEmbed.setColor('#ffffff');
exampleEmbed.setTitle('Програма за сряда');
exampleEmbed.setThumbnail('https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png');
exampleEmbed.addFields(
	{ name: '1.Математика(Геометрия)', value: '[13:20 - 14:00](https://meet.google.com/lookup/math11d)' },
	{ name: '2.Математика(Геометрия)', value: '[14:10-14:50](https://meet.google.com/lookup/math11d)' },
	{ name: '3.ООП', value: '[15:00-15:40](https://meet.google.com/kgn-raxv-sgt)/[15:00-15:40](https://meet.google.com/uup-hjdu-sii)' },
	{ name: '4.ООП', value: '[16:00-16:40](https://meet.google.com/kgn-raxv-sgt)/[16:00-16:40](https://meet.google.com/uup-hjdu-sii)' },
	{ name: '5.Физическо', value: '[16:50-17:30](https://meet.google.com/lookup/fvs11d)' },
	{ name: '6.Математика(Профил)', value: '[17:35-18:15](https://meet.google.com/lookup/pkp-aijr-xwg)' },
	{ name: '7.Алгоритми(Профил)', value: '[18:20 - 19:00](https://meet.google.com/ggx-oozp-opy)' },
);


module.exports = {
	data: new SlashCommandBuilder()
		.setName('srqda')
		.setDescription('Replies with programm for Wednesday!'),
	async execute(interaction) {
		await interaction.reply({ embeds: [exampleEmbed] });
	},
};