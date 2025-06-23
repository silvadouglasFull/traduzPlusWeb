import type { LogLinkProps } from "@components/navbarPublic/logLink/types"
import { colors } from "@flavor/constants/colors"
import { flavor } from "@flavor/index"
import { Card, Col } from "react-bootstrap"

const LogLink: React.FC<LogLinkProps> = ({ urlLogo, width = 146, height = 100 }) => {
    return (
        <Col className="col-12">
            <img
                src={urlLogo}
                width={width}
                height={height}
            />
            <Card.Text className="fw-bold text-center" style={{
                fontSize: '.75rem',
                color: colors.infiniteNight
            }}>
                {flavor}
            </Card.Text>
        </Col>
    )
}
export { LogLink }
