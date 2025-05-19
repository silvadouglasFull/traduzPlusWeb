import type React from 'react';
import type { ButtonProps } from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
export const ButtonBlock: React.FC<ButtonProps> = (butonsProps: ButtonProps) => {
    return (
        <Button variant="warning" size="lg"{...butonsProps}>
            Learn More
        </Button>
    );
}