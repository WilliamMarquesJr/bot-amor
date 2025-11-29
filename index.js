const { Client, GatewayIntentBits } = require("discord.js");
const cron = require("node-cron");

const TOKEN = process.env.TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once("ready", () => {
    console.log(`Bot conectado como ${client.user.tag}`);

    // Enviar às 12:00
    cron.schedule("0 12 * * *", async () => {
        try {
            const channel = await client.channels.fetch(CHANNEL_ID);
            if (channel) channel.send("Eu te amo ❤️");
        } catch (error) {
            console.error("Erro ao enviar mensagem das 12h:", error);
        }
    });

    // Enviar às 15:40
    cron.schedule("40 15 * * *", async () => {
        try {
            const channel = await client.channels.fetch(CHANNEL_ID);
            if (channel) channel.send("Eu te amo ❤️");
        } catch (error) {
            console.error("Erro ao enviar mensagem das 15:40:", error);
        }
    });
});

client.login(TOKEN);
