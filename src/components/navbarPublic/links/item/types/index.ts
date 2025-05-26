import type React from "react";

type LinkItem = {
    id: number;
    title: 'Home' | 'About' | 'Services' | 'Contact' | 'Blog';
    url: string;
    icon?: string;
    isActive?: boolean;
    element?: React.FC
};
export type { LinkItem };
