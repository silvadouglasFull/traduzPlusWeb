import type { Config } from "@config/types";
//@ts-ignore
export const VITE_ENV = import.meta.env.VITE_ENV ?? 'develop';
export const VITE_API_PORT = import.meta.env.VITE_API_PORT ?? '8000';
export const VITE_X_API_KEY = import.meta.env.VITE_X_API_KEY ?? '';
export const VITE_CLOUD_FLARE = import.meta.env.VITE_CLOUD_FLARE ?? '';

export const config = (): Config => {
    return {
        VITE_ENV,
        VITE_API_PORT,
        VITE_X_API_KEY,
        VITE_CLOUD_FLARE,
    }
}