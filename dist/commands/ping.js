import { SlashCommandBuilder } from "discord.js";
export const meta = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Ping the bot and report latency.");
export async function execute(interaction) {
    log.debug(`Interaction event ${interaction.id} received by '${meta.name}' command executor function.`);
    await interaction.reply({
        content: `Pong! Current websocket latency is ${interaction.client.ws.ping} ms.`,
        ephemeral: true,
    });
}
