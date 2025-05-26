import { flavor } from "@flavor/index"
import type { UseChangeTitlePageReturn } from "@hooks/useChangeTitlePage/types"
import { links } from "@utils/linksHeader"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"


export const useChangeTitlePage = (): UseChangeTitlePageReturn => {
    const [titlePage, setTitlePage] = useState<string>(flavor)
    const { pathname } = useLocation()
    useEffect(() => {
        const changeTitlePage = () => {
            const findNamePage = links.find(item => item.url === pathname)
            if (findNamePage) {
                const { title } = findNamePage
                setTitlePage(`${flavor} | ${title}`)
            } else {
                setTitlePage(flavor)
            }
        }
        changeTitlePage()
    }, [pathname])
    return {
        titlePage
    }
}