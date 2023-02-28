import { Logger } from "winston";
import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  Events,
} from "discord.js";

declare module "discord.js" {
  export interface Client {
    chatInputCommands: Collection<string, IChatInputCommand>;
  }
}

declare global {
  var log: Logger;

  export interface IChatInputCommand {
    meta: SlashCommandBuilder;
    execute: (interaction: ChatInputCommandInteraction) => void;
    autocomplete?: (interaction: AutocompleteInteraction) => void;
  }

  export interface IClientEvent {
    event: ClientEvents;
    once?: boolean | false;
    execute: (...args) => void;
  }

  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      DISCORD_API_TOKEN: string;
      DISCORD_CLIENT_ID: string;
      LOG_LEVEL: string;
      DEVELOPMENT_MODE: boolean;
      DEV_GUILD_ID: string;
    }
  }
}
