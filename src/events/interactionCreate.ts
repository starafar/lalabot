import { ClientEvents, Events, Interaction } from "discord.js";

export const event: keyof ClientEvents = Events.InteractionCreate;

export const once: boolean = false;

export function execute(interaction: Interaction) {
  // If we've received a chat input command interaction, do that.
  if (interaction.isChatInputCommand()) {
    const command: IChatInputCommand = interaction.client.chatInputCommands.get(
      interaction.commandName
    );

    command.execute(interaction);
  }

  // TO DO: Add additional interaction type handlers.
}
