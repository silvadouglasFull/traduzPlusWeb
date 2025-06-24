import { styleDesktop, styleMobile } from "@components/navbarPublic/logLink/styles"
import type { LogLinkProps } from "@components/navbarPublic/logLink/types"

const LogLink: React.FC<LogLinkProps> = ({ urlLogo }) => {
    return (
        <>
            <img
                src={urlLogo}
                style={styleMobile}
                className="d-block d-md-none"
            />
            <img
                src={urlLogo}
                style={styleDesktop}
                className="d-none d-md-block"
            />
        </>)
}
export { LogLink }
