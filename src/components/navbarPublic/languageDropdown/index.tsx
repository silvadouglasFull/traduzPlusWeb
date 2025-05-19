import { Button } from '@components/navbarPublic/languageDropdown/button'
import { Lenguages } from '@components/navbarPublic/languageDropdown/languages'
import { languages } from '@utils/languages'
import React from 'react'

export const LanguageDropdown: React.FC = () => {
    return (
        <Button>
            <Lenguages items={languages} />
        </Button>
    )
}