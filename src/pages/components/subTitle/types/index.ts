import React from "react"

export type TextSubTitle = {
    text: string,
    applyShadown?: boolean
}
export type SubTitleProps = TextSubTitle & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
export type Styles = React.CSSProperties