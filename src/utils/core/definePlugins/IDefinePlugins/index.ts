/**
 * IDefinePlugins.ts
 * @description Interface for defining and retrieving DOM plugins.
 */

import type { Plugins } from "@core/definePlugins/types";

/**
 * Contract for plugin detection service.
 */
export interface IDefinePlugins {
    /**
     * Detects and returns a list of plugin-related DOM elements.
     * @returns {Plugins | null}
     */
    getPlugins(): Plugins | null;
}
