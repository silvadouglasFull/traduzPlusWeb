/**
 * useNavBarExpanded
 * Changes navbar background based on scroll position.
 *
 * @returns {hasBackground} - true if scroll position > 0, false if at top
 */

import type { UseNavBarExpanded } from '@components/navbarPublic/hooks/useNavBarExpanded/types';
import { useState } from 'react';


export const useNavBarExpanded = (): UseNavBarExpanded => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const handleExpanded = (): void => {
        setIsExpanded(!isExpanded)
    }
    return { isExpanded, handleExpanded };
};
