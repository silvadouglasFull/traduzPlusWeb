import { Button } from '@navbarPublic/LanguageDropdown/Button'
import { Lenguages } from '@navbarPublic/LanguageDropdown/Languages'
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