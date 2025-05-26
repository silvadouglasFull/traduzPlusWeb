import type React from 'react';
import type { ButtonProps } from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
export const ButtonBlock: React.FC<ButtonProps> = (butonsProps: ButtonProps) => {
    return (
        <Button variant="oxford" className='text-uppercase' size="lg"{...butonsProps}>
            <Link className='text-decoration-none text-light' to={'/services'}>
                Learn More
            </Link>
        </Button>
    );
}