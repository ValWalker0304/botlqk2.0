const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const exampleEmbed = new MessageEmbed();
exampleEmbed.setColor('#ffffff');
exampleEmbed.setTitle('Програма за четъртък');
exampleEmbed.setThumbnail('https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png');
exampleEmbed.addFields(
	{ name: '1.Немски(Профил)', value: '[13:20 - 14:00](https://meet.google.com/lookup/yhq-qnsu-ycq)' },
	{ name: '2.Немски(Профил)', value: '[14:10-14:50](https://meet.google.com/lookup/yhq-qnsu-ycq)' },
	{ name: '3.Математика', value: '[15:00-15:40](https://meet.google.com/lookup/pkp-aijr-xwg)' },
	{ name: '4.Немски', value: '[16:00-16:40](https://meet.google.com/lookup/fsz-pfmx-ktq)' },
	{ name: '5.Математика(Геометрия)', value: '[16:50-17:30](https://meet.google.com/lookup/math11d)' },
);


module.exports = {
	data: new SlashCommandBuilder()
		.setName('chetvurtuk')
		.setDescription('Replies with programm for Thursday!'),
	async execute(interaction) {
		await interaction.reply({ embeds: [exampleEmbed] });
	},
};