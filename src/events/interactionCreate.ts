import { ClientEvents, Events, Interaction } from "discord.js";

export const event: keyof ClientEvents = Events.InteractionCreate;

export const once: boolean = false;

export function execute(interaction: Interaction) {
  log.debug(`Interaction event ${interaction.id} received.`)

  // If we've received a chat input command interaction, do that.
  if (interaction.isChatInputCommand()) {
    log.debug(`Interaction event ${interaction.id} is a ChatInputCommandInteraction. Forwarding to command executor...`)

    const command: IChatInputCommand = interaction.client.chatInputCommands.get(
      interaction.commandName
    );

    command.execute(interaction);
  }

  // TO DO: Add additional interaction type handlers.
}
