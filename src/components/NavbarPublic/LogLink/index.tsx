import type { LogLinkProps } from "@navbarPublic/LogLink/types"

const LogLink: React.FC<LogLinkProps> = ({ urlLogo, width = 246, height = 44 }) => {
    return (
        <a className="rd-navbar-brand" href="/">
            <img
                src={urlLogo}
                alt="Logo"
                width={width}
                height={height}
                srcSet="images/logo-inverse-487x88.png 2x"
            />
        </a>
    )
}
export { LogLink }
