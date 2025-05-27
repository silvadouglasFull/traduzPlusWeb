import type { LogLinkProps } from "@components/navbarPublic/logLink/types"
import { Link } from "react-router-dom"

const LogLink: React.FC<LogLinkProps> = ({ urlLogo, width = 146, height = 100 }) => {
    return (
        <Link to={'/'} className="text-decoration-none">
            <img
                src={urlLogo}
                width={width}
                height={height}
            />
        </Link>
    )
}
export { LogLink }
