import { SlashCommandBuilder } from "discord.js";
export const meta = new SlashCommandBuilder()
    .setName("event")
    .setDescription("Create and manage events.")
    .addSubcommand((subcommand) => subcommand
    .setName("create")
    .setDescription("Modify an existing event.")
    .addStringOption((option) => option
    .setName("title")
    .setDescription("The title of the event.")
    .setRequired(true))
    .addStringOption((option) => option
    .setName("description")
    .setDescription("The description of the event."))
    .addIntegerOption((option) => option
    .setName("players")
    .setDescription("The total number of players allowed for this event."))
    .addIntegerOption((option) => option
    .setName("tanks")
    .setDescription("The maximum number of tanks allowed for this event."))
    .addIntegerOption((option) => option
    .setName("healers")
    .setDescription("The maximum number of healers allowed for this event."))
    .addIntegerOption((option) => option
    .setName("dps")
    .setDescription("The maximum number of DPS players allowed for this event."))
    .addIntegerOption((option) => option
    .setName("melee")
    .setDescription("The maximum number of melee DPS players allowed for this event."))
    .addIntegerOption((option) => option
    .setName("ranged")
    .setDescription("The maximum number of ranged DPS players allowed for this event."))
    .addIntegerOption((option) => option
    .setName("casters")
    .setDescription("The maximum number of magic DPS players allowed for this event."))
    .addIntegerOption((option) => option
    .setName("open")
    .setDescription("The number of role-unspecified slots to open for this event.")))
    .addSubcommand((subcommand) => subcommand
    .setName("edit")
    .setDescription("Modify an existing event.")
    .addIntegerOption((option) => option
    .setName("event_id")
    .setDescription("The ID of the event you want to change.")
    .setRequired(true)))
    .addSubcommand((subcommand) => subcommand
    .setName("delete")
    .setDescription("Delete an event.")
    .addIntegerOption((option) => option
    .setName("event_id")
    .setDescription("The ID of the event you want to delete.")
    .setRequired(true)));
export async function execute(interaction) {
    log.debug(`Interaction event ${interaction.id} received by '${meta.name}' command executor function.`);
    switch (interaction.options.getSubcommand()) {
        case "create":
            // await interaction.reply({
            //   content: "Sorry, I'm not yet able to create events.",
            //   ephemeral: true,
            // });
            await createEvent(interaction);
            break;
        case "edit":
            await interaction.reply({
                content: "Sorry, I'm not yet able to edit events.",
                ephemeral: true,
            });
            break;
        case "delete":
            await interaction.reply({
                content: "Sorry, I'm not yet able to delete events.",
                ephemeral: true,
            });
            break;
        default:
            await interaction.reply({
                content: `The ${interaction.options.getSubcommand()} subcommand hasn't been implemented.`,
                ephemeral: true,
            });
            break;
    }
}
async function createEvent(interaction) {
    // const title: string = interaction.options.getString("title", true);
    // const description: string | null =
    //   interaction.options.getString("description");
    // const players: number | null = interaction.options.getInteger("players");
    // const tanks: number | null = interaction.options.getInteger("tanks");
    // const healers: number | null = interaction.options.getInteger("healers");
    // const dps: number | null = interaction.options.getInteger("dps");
    // const melee: number | null = interaction.options.getInteger("melee");
    // const ranged: number | null = interaction.options.getInteger("ranged");
    // const casters: number | null = interaction.options.getInteger("casters");
    // const open: number | null = interaction.options.getInteger("open");
    log.debug(interaction);
    return;
}
