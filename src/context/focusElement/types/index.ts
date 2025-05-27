import type React from "react"

export type Provider = {
    refElement: React.RefObject<HTMLDivElement | null>
    scrollEment: () => void
}