import { Icon } from '@components/icons';
import { useSetVariant } from '@components/toast/hooks/useSetVariant';
import type { ToastProps } from '@components/toast/types';
import { logo } from "@flavor/constants/assets";
import { flavor } from '@flavor/index';
import { getTimeInHoursMinutes } from '@utils/date';
import { ToastContainer, Toast as ToastReactBootstrap } from 'react-bootstrap';
export const Toast: React.FC<ToastProps> = ({ statusCode, message, show, onclose }: ToastProps) => {
    const { variant } = useSetVariant({ statusCode })
    const handleClose = () => {
        onclose && onclose()
    }
    return (
        <ToastContainer
            style={{
                zIndex: 9999,
                position: 'fixed',
                top: 0,
                right: 0,
            }}
        >
            <ToastReactBootstrap
                show={show}
                delay={3000}
                autohide
                onClose={handleClose}
                className="d-inline-block m-1"
                bg={variant}
            >
                <ToastReactBootstrap.Header closeButton={false}>
                    <strong className="me-auto">
                        {flavor}
                    </strong>
                    <img
                        src={logo}
                        className="rounded me-2"
                        alt={`Logo da ${flavor}`}
                        style={{
                            width: 100
                        }}
                    />
                    <small className='d-flex d-flex-nowrap align-items-center'><Icon name='fa-solid fa-clock' /> {getTimeInHoursMinutes()}</small>
                </ToastReactBootstrap.Header>
                <ToastReactBootstrap.Body className={'text-white'}>
                    {message}
                </ToastReactBootstrap.Body>
            </ToastReactBootstrap>
        </ToastContainer>
    );
}
