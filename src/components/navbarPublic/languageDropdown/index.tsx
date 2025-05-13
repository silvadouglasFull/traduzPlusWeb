import { Button } from '@components/navbarPublic/languageDropdown/button'
import { Lenguages } from '@components/navbarPublic/languageDropdown/languages'
import { languages } from '@utils/languages'
import React from 'react'

export const LanguageDropdown: React.FC = () => {
    return (
        <div className="dropdown ms-auto">
            <Button />
            <Lenguages items={languages} />
        </div>
    )
}