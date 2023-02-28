import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export const meta = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Ping the bot and report latency.");

export async function execute(interaction: ChatInputCommandInteraction) {
  log.debug("Reached 'ping' command executor function.");

  await interaction.reply({
    content: `Pong! Current websocket latency is ${interaction.client.ws.ping} ms.`,
    ephemeral: true,
  });
}
