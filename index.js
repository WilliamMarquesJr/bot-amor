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

    cron.schedule("0 12 * * *", () => {
        const channel = client.channels.cache.get(CHANNEL_ID);
        if (channel) channel.send("Eu te amo ❤️");
    });

    cron.schedule("40 15 * * *", () => {
        const channel = client.channels.cache.get(CHANNEL_ID);
        if (channel) channel.send("Eu te amo ❤️");
    });
});

client.login(TOKEN);
