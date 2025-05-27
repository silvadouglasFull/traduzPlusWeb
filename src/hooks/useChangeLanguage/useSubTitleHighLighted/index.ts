import { useLanguage } from "@context/language/hooks";
import { subTitlesHighLighted } from "@flavor/constants/texts/home/fifthSection";
import type { TSubTitleHighLighted } from "@pages/layouts/fifthSection/components/subTitleHighLighted/types";
import { useEffect, useState } from "react";

export const useSubTitleHighLighted = (): TSubTitleHighLighted => {
    const [subTitleHighLighted, setSubTitleHighLighted] = useState<TSubTitleHighLighted>(subTitlesHighLighted[0])
    const { language } = useLanguage()
    useEffect(() => {
        setSubTitleHighLighted(subTitlesHighLighted.find(item => item.language === language) ?? subTitlesHighLighted[0])
    }, [language])
    return {
        ...subTitleHighLighted
    }
}