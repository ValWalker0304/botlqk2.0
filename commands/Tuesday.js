const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const exampleEmbed = new MessageEmbed();
exampleEmbed.setColor('#ffffff');
exampleEmbed.setTitle('Програма за вторник');
exampleEmbed.setThumbnail('https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png');
exampleEmbed.addFields(
	{ name: '1.ООП', value: '[13:20-14:00](https://meet.google.com/kgn-raxv-sgt)/[13:20 - 14:00](https://meet.google.com/uup-hjdu-sii)' },
	{ name: '2.Втори чужд', value: '[14:10-14:50](https://meet.google.com/lookup/aetoskova)/[14:10-14:50](https://meet.google.com/xbn-qmxs-npf)' },
	{ name: '3.Гражданско образование', value: '[15:00-15:40](https://meet.google.com/lookup/mihova)' },
	{ name: '4.Физическо', value: '[16:00-16:40](https://meet.google.com/lookup/fvs11d)' },
	{ name: '5.Немски', value: '[16:50-17:30](https://meet.google.com/lookup/fsz-pfmx-ktq)' },
	{ name: '6.Немски(Профил)', value: '[17:35-18:15](https://meet.google.com/lookup/yhq-qnsu-ycq)' },
	{ name: '7.Немски(Профил)', value: '[18:20 - 19:00](https://meet.google.com/lookup/yhq-qnsu-ycq)' },
);


module.exports = {
	data: new SlashCommandBuilder()
		.setName('vtornik')
		.setDescription('Replies with programm for Tuesday!'),
	async execute(interaction) {
		await interaction.reply({ embeds: [exampleEmbed] });
	},
};