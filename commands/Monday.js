const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const exampleEmbed = new MessageEmbed();
exampleEmbed.setColor('#ffffff');
exampleEmbed.setTitle('Програма за понеделник');
exampleEmbed.setThumbnail('https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png');
exampleEmbed.addFields(
	{ name: '1.Литература', value: '[13:20-14:00](https://meet.google.com/lookup/f5v5zmipja)' },
	{ name: '2.Литература', value: '[14:10-14:50](https://meet.google.com/lookup/f5v5zmipja)' },
	{ name: '3.Втори чужд', value: '[15:00-15:40](https://meet.google.com/lookup/aetoskova)/[15:00-15:40](https://meet.google.com/xbn-qmxs-npf)' },
	{ name: '4.Математика', value: '[16:00-16:40](https://meet.google.com/lookup/pkp-aijr-xwg)' },
	{ name: '5.Немски(Профил)', value: '[16:50-17:30](https://meet.google.com/lookup/yhq-qnsu-ycq)' },
	{ name: '6.Немски(Профил)', value: '[17:35-18:15](https://meet.google.com/lookup/yhq-qnsu-ycq)' },
	{ name: '7.Час на класа', value: '[18:20 - 19:00](https://meet.google.com/lookup/fvs11d)' },
);


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ponedelnik')
		.setDescription('Replies with programm for Monday!'),
	async execute(interaction) {
		await interaction.reply({ embeds: [exampleEmbed] });
	},
};