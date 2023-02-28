import { Events } from "discord.js";
import { exit } from "process";
export const event = Events.ClientReady;
export const once = true;
export function execute(client) {
    if (!client.user) {
        log.crit("The bot reports ready, but isn't logged in.");
        exit(1);
    }
    console.log(`Ready! Logged in as ${client.user.tag}`);
}
