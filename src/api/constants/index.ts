import type { Host } from "@api/constants/types";

export const hosts: Host[] = [
    {
        env: 'test',
        host: 'https://solucoeslinguisticas.fly.dev'
    },
    {
        env: 'develop',
        host: 'http://localhost'
    }
] 