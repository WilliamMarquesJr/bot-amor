const { Client, GatewayIntentBits } = require("discord.js");
const cron = require("node-cron");

const registerCommands = require("./deploy-commands.js");

const TOKEN = process.env.TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

registerCommands();

client.once("ready", () => {
    console.log(`Bot conectado como ${client.user.tag}`);

    cron.schedule("0 12 * * *", async () => {
        try {
            const channel = await client.channels.fetch(CHANNEL_ID);
            if (channel) channel.send("Neném eu te amo, você é a minha fofinha do pezinho e da mãozinha cuti cuti.");
        } catch (error) {
            console.error("Erro ao enviar mensagem das 12h:", error);
        }
    });

    cron.schedule("40 15 * * *", async () => {
        try {
            const channel = await client.channels.fetch(CHANNEL_ID);
            if (channel) channel.send("Princesa linda, flor do meu jardim do amor. Eu te amo.");
        } catch (error) {
            console.error("Erro ao enviar mensagem das 15:40:", error);
        }
    });

    cron.schedule("0 19 * * *", async () => {
        try {
            const channel = await client.channels.fetch(CHANNEL_ID);
            if (channel) channel.send("Bunda grande gostosa da minha vida, eu te amo.");
        } catch (error) {
            console.error("Erro ao enviar mensagem das 19h:", error);
        }
    });
});

client.on("interactionCreate", async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "bubis") {
        await interaction.reply("Minha princesa linda, eu te amo ❤️");
    }

    if (interaction.commandName === "gatos") {
        await interaction.reply("Bubis tem 5 gatos: Neo, Nami, Niquinho e Nilson");
    }

    if (interaction.commandName === "cammy") {
        await interaction.reply("sou a Cammy dele");
    }

    if (interaction.commandName === "bubinho") {
        await interaction.reply("minha garota obediente fofinha");
    }
});

client.login(TOKEN);
