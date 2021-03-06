import * as Discord from 'discord.js';
import { MessageHandler } from './handlers/messageHandler';
import { Logger } from './util/logger';
import { PluginContainer } from './containers/pluginContainer';
import { Util } from './util/util';
import { CommandContainer } from './containers/commandContainer';
import { Plugin } from './plugins/plugin';
import { GuildManager, DataFetcher, PermissionTracker } from '../index';
import { Response } from "./util/response";
import { Command } from "./commands/command";
export interface Cast {
    /**
     * The client that Cast will interact with
     *
     * @type {Discord.Client}
     * @memberof Cast
     */
    client: Discord.Client;
    /**
     * A circular reference to this object
     *
     * @type {Cast}
     * @memberof Cast
     */
    cast: Cast;
    /**
     * The global logger
     *
     * @type {Logger}
     * @memberof Cast
     */
    logger: Logger;
    /**
     * A map of message listeners by their channel
     *
     * @type {MessageHandler}
     * @memberof Cast
     */
    messageHandler: MessageHandler;
    /**
     * The container of global commands
     *
     * @type {CommandContainer}
     * @memberof Cast
     */
    commands: CommandContainer;
    /**
     * The utilities library
     *
     * @type {Util}
     * @memberof Cast
     */
    util: Util;
    /**
     * The plugin container for this Cast instance
     *
     * @type {PluginContainer}
     * @memberof Cast
     */
    pluginContainer: PluginContainer;
    /**
     * Whether or not Cast is in debug mode
     *
     * @type {boolean} Debug mode
     * @memberof Cast
     */
    debug: boolean;
    /**
     * Gets the token for this bot
     *
     * @returns {string} The token
     * @memberof Cast
     */
    token: string;
    /**
     * Gets an array of global admins
     *
     * @type {string[]} The global admins
     * @memberof Cast
     */
    globalAdmins: string[];
    /**
     * Gets an array of default permissions each user/role will inherit
     *
     * @type {string[]} The default permissions
     * @memberof Cast
     */
    defaultPermissions: string[];
    /**
     * Gets the command prefix
     *
     * @type {string} The command prefix
     * @memberof Cast
     */
    commandPrefix: string;
    /**
     * Gets an array of blacklisted users
     *
     * @type {string[]} The blacklisted users
     * @memberof Cast
     */
    userBlacklist: string[];
    /**
     * A list of all loaded plugins
     *
     * @type {Map<string, Plugin>}
     * @memberof Cast
     */
    plugins: Map<string, Plugin>;
    /**
     * A reference to the container factory
     *
     * @type {DataFetcher}
     * @memberof Cast
     */
    dataFetcher: DataFetcher;
    /**
     * Set the blacklist state of a user
     *
     * @param {Discord.Snowflake} id The user to set blacklist
     * @memberof Cast
     */
    setBlacklisted(id: Discord.Snowflake, blacklist: boolean): any;
    /**
     * Builds a logger using the provided prefix tags
     *
     * @param {string[]} prefixes The prefixes
     * @returns {Logger} The logger
     * @memberof Cast
     */
    createLogger(prefixes: string[]): Logger;
    /**
     * Checks whether or not the given entity has permission to execute a command.
     *
     * @param {(Discord.Role | Discord.GuildMember | Discord.User)} entity The entity to check against
     * @param {string} permission The permission to check for
     * @returns {Promise<boolean>} Whether they have permission
     * @memberof Cast
     */
    hasPermission(entity: Discord.Role | Discord.GuildMember | Discord.User, command: Command | string): Promise<boolean>;
    /**
     * Creates a command container for the provided directory
     *
     * @param {string} commandPath The command directory
     * @returns {CommandContainer}
     * @memberof Cast
     */
    createCommandContainer(commandPath: string, owner: Plugin): CommandContainer;
    /**
     * Fetches a permission tracker for the given entity
     *
     * @param {(Discord.Role | Discord.GuildMember | Discord.User)} entity The entity to fetch
     * @returns {Promise<PermissionTracker>} The Permission Tracker
     * @memberof Cast
     */
    getPermissionTracker(entity: Discord.Role | Discord.GuildMember | Discord.User): Promise<PermissionTracker>;
    /**
     * Gets the guild manager for a given guild
     *
     * @param {Discord.Guild} guild
     * @returns {Promise<GuildManager>}
     * @memberof Cast
     */
    getGuildManager(guild: Discord.Guild): Promise<GuildManager>;
    /**
     * Creates a response wrapper for the given message
     *
     * @param {Discord.Message} message
     * @returns {Response} The response object
     * @memberof Cast
     */
    createResponse(message: Discord.Message): Response;
}
