import { Events } from "discord.js";
export const event = Events.InteractionCreate;
export const once = false;
export function execute(interaction) {
    if (interaction.isChatInputCommand()) {
        const command = interaction.client.chatInputCommands.get(interaction.commandName);
        command.execute(interaction);
    }
}
