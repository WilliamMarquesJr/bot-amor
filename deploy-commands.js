const { REST, Routes, SlashCommandBuilder } = require("discord.js");
require("dotenv").config();

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const commands = [
    new SlashCommandBuilder()
        .setName("bubis")
        .setDescription("Mensagem de amor para Bubis"),

    new SlashCommandBuilder()
        .setName("gatos")
        .setDescription("Mostra os gatos da Bubis"),

    new SlashCommandBuilder()
        .setName("cammy")
        .setDescription("Declaração estilo 'sou a Cammy dele'"),

    new SlashCommandBuilder()
        .setName("bubinho")
        .setDescription("Uma mensagem fofa: minha garota obediente fofinha")
].map(cmd => cmd.toJSON());

const rest = new REST({ version: "10" }).setToken(TOKEN);

// Exportamos a função para ser chamada no index.js
module.exports = async () => {
    try {
        console.log("⏳ Registrando comandos...");
        await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            { body: commands }
        );
        console.log("✅ Comandos registrados com sucesso!");
    } catch (error) {
        console.error("❌ Erro ao registrar comandos:", error);
    }
};
