import { globbySync } from "globby";
import { REST, Routes, } from "discord.js";
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
const commands = await Promise.all(globbySync("./commands/*.js", { cwd: "dist" }).map(async (commandFile) => {
    const command = await import(commandFile);
    log.debug(`Loaded command '${command.meta.name}' from ${commandFile}.`);
    return command.meta.toJSON();
}));
const api = new REST().setToken(process.env.DISCORD_API_TOKEN);
if (process.env.DEVELOPMENT_MODE) {
    log.info("Currently running in development mode. Registering commands as guild commands...");
    await api.put(Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID, process.env.DEV_GUILD_ID), { body: commands });
}
else {
    log.info("Registering global commands...");
    await api.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), {
        body: commands,
    });
}
