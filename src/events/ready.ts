import { Client, ClientEvents, Events } from "discord.js";
import { exit } from "process";

export const event: keyof ClientEvents = Events.ClientReady;

export const once: boolean = true;

export function execute(client: Client) {
  if (!client.user) {
    log.crit("The bot reports ready, but isn't logged in.");
    exit(1);
  }
  console.log(`Ready! Logged in as ${client.user.tag}`);
}
