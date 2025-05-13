/**
 * IDetectUserAgentEnv.ts
 * @description Interface for detecting user agent environment.
*/

import type { UserAgentEnv } from "@utils/detectUserAgentEnv/types";

/**
 * Defines the contract for user agent environment detection.
 */
export interface IDetectUserAgentEnv {
    /**
     * Detects and returns environment data.
     * @returns {UserAgentEnv | null}
     */
    detect(): UserAgentEnv | null;
}
