import { Client, Collection, GatewayIntentBits } from "discord.js";
import { globbySync } from "globby";
import dotenv from "dotenv";
import winston from "winston";
dotenv.config();
global.log = winston.createLogger({
    levels: winston.config.syslog.levels,
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(winston.format.colorize(), winston.format.timestamp(), winston.format.printf((info) => `${info["timestamp"]} ${info.level}: ${info.message}`)),
            level: process.env.LOG_LEVEL,
        }),
    ],
});
const { Guilds, MessageContent, GuildMessages, GuildMembers } = GatewayIntentBits;
const client = new Client({
    intents: [Guilds, MessageContent, GuildMessages, GuildMembers],
});
client.chatInputCommands = new Collection();
log.info("Loading commands...");
await Promise.all(globbySync("./commands/*.js", { cwd: "dist" }).map(async (commandFile) => {
    const command = await import(commandFile);
    log.debug(`Loaded command '${command.meta.name}' from ${commandFile}.`);
    client.chatInputCommands.set(command.meta.name, command);
}));
log.info("Loading events...");
await Promise.all(globbySync("./events/*.js", { cwd: "dist" }).map(async (eventFile) => {
    const event = await import(eventFile);
    log.debug(`Loaded '${event.once ? "once" : "on"}' event '${event.event}' from [${eventFile}].`);
    if (event.once) {
        client.once(event.event, (...args) => event.execute(...args));
    }
    else {
        client.on(event.event, (...args) => event.execute(...args));
    }
}));
client.login(process.env.DISCORD_API_TOKEN);
