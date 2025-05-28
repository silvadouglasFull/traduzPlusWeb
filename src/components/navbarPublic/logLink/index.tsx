import type { LogLinkProps } from "@components/navbarPublic/logLink/types"

const LogLink: React.FC<LogLinkProps> = ({ urlLogo, width = 146, height = 100 }) => {
    return (
        <img
            src={urlLogo}
            width={width}
            height={height}
        />
    )
}
export { LogLink }
