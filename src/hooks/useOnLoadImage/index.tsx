import { useState } from "react"

export type UseOnLoadImage = {
    onLoad: () => void,
    loading: boolean
}
export const useOnLoadImage = (): UseOnLoadImage => {
    const [loading, setLoading] = useState(false)
    const onLoad = (): void => {
        setLoading(true)
    }
    return { loading, onLoad }
}