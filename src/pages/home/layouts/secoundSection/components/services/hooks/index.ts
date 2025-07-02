import type { UseSetsTheHeightOfAllCards, UseSetsTheHeightOfAllCardsParams } from "@pages/home/layouts/secoundSection/components/services/hooks/types";
import { useCallback, useEffect, useRef, useState } from "react";

export const usesetsTheHeightOfAllCards = ({ lengthOfCards }: UseSetsTheHeightOfAllCardsParams): UseSetsTheHeightOfAllCards => {
    const [height, setHeight] = useState<string>('100%')
    const refArray = useRef<HTMLDivElement[]>([]);
    const createOffSetHeightList = useCallback((el: HTMLDivElement | null, index: number) => {
        if (!el || refArray.current.includes(el)) return;
        refArray.current.splice(index, 0, el);
    }, []);
    useEffect(() => {
        if (lengthOfCards === refArray?.current?.length) {
            const listOfHights = refArray.current.map(item => item.offsetHeight)
            setHeight(`${Math.max(...listOfHights) / 16}rem`)
        }
    }, [lengthOfCards, refArray.current])
    return {
        height,
        createOffSetHeightList
    }
}