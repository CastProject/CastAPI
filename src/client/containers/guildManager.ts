import {Guild} from 'discord.js';
import {Command, Plugin} from '../../index';
import {Container} from "./data/container";

export interface GuildSettings {
  getAll(): Promise<any>;
  get(key: string): Promise<any>;
  set(key: string, value: string): Promise<void>;
}

export interface GuildManager {

  /**
   * The guild that this manager manages
   * 
   * @type {Guild}
   * @memberof GuildManager
   */
  guild: Guild;

  /**
   * The container for this guild
   * 
   * @type {Container}
   * @memberof GuildManager
   */
  container: Container;

  /**
   * The settings for this guild - to be used by plugins
   * 
   * @type {GuildSettings}
   * @memberof GuildManager
   */
  settings: GuildSettings;

  /**
   * Whether the given command or plugin is enabled
   * 
   * @param {(Command | Plugin)} object The object to check against
   * @returns {boolean} Whether it is enabled or disabled
   * @memberof GuildManager
   */
  isEnabled(object: Command | Plugin): Promise<boolean>;

  /**
   * Enable or disable the given command or plugin
   * 
   * @param {(Command | Plugin)} object The object to toggle
   * @param {boolean} enabled Whether to enable or disable
   * @returns {Promise<void>} The completion
   * @memberof GuildManager
   */
  setEnabled(object: Command | Plugin, enabled: boolean): Promise<void>;
}