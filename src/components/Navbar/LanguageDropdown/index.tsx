import React from 'react'
import { Button } from './Button'
import { Lenguages } from './Languages'
/**
 * Render a LanguageDropdown.
 * @returns {JSX.Element}
 */
export const LanguageDropdown: React.FC = () => {
    return (
        <div className="dropdown ms-auto">
            <Button />
            <Lenguages items={[]} />
        </div>
    )
}