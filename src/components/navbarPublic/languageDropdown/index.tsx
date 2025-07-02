import { Button } from '@components/navbarPublic/languageDropdown/button';
import { useLanguage } from "@components/navbarPublic/languageDropdown/hooks/useLanguage";
import { Lenguages } from '@components/navbarPublic/languageDropdown/languages';

import React from 'react';

export const LanguageDropdown: React.FC = () => {
    const { languages } = useLanguage()
    return (
        <Button>
            <Lenguages items={languages} />
        </Button>
    )
}