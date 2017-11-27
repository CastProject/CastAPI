import { Cast } from "../cast";
import { Plugin } from "./plugin";
import { Response } from "../util/response";
import { Message } from "discord.js";
export declare module MiniPlugin {
    type MiniCommandOperator = (this: Plugin, response: Response, message: Message, args: string[]) => Promise<any>;
    type MiniEventOperator = (this: Plugin) => Promise<void> | void;
    type StateChangeOperator = (this: Plugin) => Promise<void>;
    type MiniCommand = {
        environments: ["text" | "dm"];
        globalAdmin: boolean;
        name: string;
        operator: MiniCommandOperator;
        permission?: string;
    };
    type MiniEvent = {
        event: string;
        operator: MiniEventOperator;
    };
    type DumpedPlugin = {
        commands: MiniCommand[];
        events: MiniEvent[];
        name?: string;
        version?: string;
        id?: string;
        enabled?: StateChangeOperator;
        disabled?: StateChangeOperator;
    };
    type MetadataOpt = "name" | "version" | "id";
    interface PluginBuilder {
        cast: Cast;
        readonly interactedWith: boolean;
        command(name: string, operator: MiniCommandOperator, permission?: string, environments?: ["text", "dm"], globalAdmin?: boolean): void;
        on(event: string, operator: MiniEventOperator): void;
        enabled(operator: StateChangeOperator): void;
        disabled(operator: StateChangeOperator): void;
        set(key: MetadataOpt, value: string): void;
        dumpedPlugin: DumpedPlugin;
        plugin: Plugin;
    }
    type MiniPlugin = (plugin: PluginBuilder) => Promise<void>;
}
