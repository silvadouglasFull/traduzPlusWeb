import type React from "react"

export type Breadcrumbs = {
    backgroundImage: string
}
export type BreadcrumbsProps = Breadcrumbs & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>