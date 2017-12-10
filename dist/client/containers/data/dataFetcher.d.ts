import { Guild, GuildMember, Role, User } from "discord.js";
import { Plugin } from "../../plugins/Plugin";
import { Container } from "./container";
export interface DataFetcher {
    getGuildContainer(guild: Guild): Promise<Container>;
    getPluginContainer(plugin: Plugin): Promise<Container>;
    getUserContainer(user: User): Promise<Container>;
    getMemberContainer(member: GuildMember): Promise<Container>;
    getRoleContainer(role: Role): Promise<Container>;
    getGlobalContainer(): Promise<Container>;
}
