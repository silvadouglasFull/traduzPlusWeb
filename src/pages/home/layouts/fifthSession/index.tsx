import '@pagesHome/styles/index.css';
import React from "react";
import { Button, Container } from 'react-bootstrap';
import { SubTitleHighLighted } from './components/subTitleHighLighted';
export const FifthSession: React.FC = () => {
    return (
        <section className="p-3 text-center bg-primary-gradient mb-3">
            <Container className='p-5'>
                <SubTitleHighLighted text='Professional' hightLightedText='Translation services' />
                <Button className='text-uppercase mt-3' size='lg'>
                    order now
                </Button>
            </Container>
        </section>
    )
}