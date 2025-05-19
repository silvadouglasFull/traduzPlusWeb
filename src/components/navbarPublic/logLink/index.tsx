import type { LogLinkProps } from "@components/navbarPublic/logLink/types"
import { Link } from "react-router-dom"

const LogLink: React.FC<LogLinkProps> = ({ urlLogo, width = 246, height = 44 }) => {
    return (
        <Link to="/">
            < img
                src={urlLogo}
                alt="Logo"
                width={width}
                height={height}
                srcSet="images/logo-inverse-487x88.png 2x"
            />
        </Link >
    )
}
export { LogLink }
