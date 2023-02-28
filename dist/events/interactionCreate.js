import { Events } from "discord.js";
export const event = Events.InteractionCreate;
export const once = false;
export function execute(interaction) {
    log.debug(`Interaction event ${interaction.id} received.`);
    // If we've received a chat input command interaction, do that.
    if (interaction.isChatInputCommand()) {
        log.debug(`Interaction event ${interaction.id} is a ChatInputCommandInteraction. Forwarding to command executor...`);
        const command = interaction.client.chatInputCommands.get(interaction.commandName);
        command.execute(interaction);
    }
    // TO DO: Add additional interaction type handlers.
}
