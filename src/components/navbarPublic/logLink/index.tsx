import type { LogLinkProps } from "@components/navbarPublic/logLink/types"
import { LazyLoadImage } from "react-lazy-load-image-component"

const LogLink: React.FC<LogLinkProps> = ({ urlLogo, width = 146, height = 100 }) => {
    return (
        <LazyLoadImage
            src={urlLogo}
            width={width}
            height={height}
            effect="blur"
            delayMethod="throttle" />
    )
}
export { LogLink }
