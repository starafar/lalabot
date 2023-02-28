import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export const meta = new SlashCommandBuilder()
  .setName("event")
  .setDescription("Create and manage events.")
  .addSubcommand((subcommand) =>
    subcommand.setName("create").setDescription("Create a new event.")
  )
  .addSubcommand((subcommand) =>
    subcommand
      .setName("edit")
      .setDescription("Modify an existing event.")
      .addIntegerOption((option) =>
        option
          .setName("event_id")
          .setDescription("The ID of the event you want to change.")
      )
  )
  .addSubcommand((subcommand) =>
    subcommand
      .setName("delete")
      .setDescription("Delete an event.")
      .addIntegerOption((option) =>
        option
          .setName("event_id")
          .setDescription("The ID of the event you want to delete.")
      )
  );

export async function execute(interaction: ChatInputCommandInteraction) {
  log.debug(
    `Interaction event ${interaction.id} received by '${meta.name}' command executor function.`
  );

  switch (interaction.options.getSubcommand()) {
    case "create":
      interaction.reply({
        content: "Sorry, I'm not yet able to create events.",
        ephemeral: true,
      });
      break;
    case "edit":
      interaction.reply({
        content: "Sorry, I'm not yet able to edit events.",
        ephemeral: true,
      });
      break;
    case "delete":
      interaction.reply({
        content: "Sorry, I'm not yet able to delete events.",
        ephemeral: true,
      });
      break;
    default:
      interaction.reply({
        content: `The ${interaction.options.getSubcommand()} subcommand hasn't been implemented.`,
        ephemeral: true,
      });
      break;
  }
}
