import { SubTitleHighLighted } from '@pagesHome/layouts/fifthSession/components/subTitleHighLighted';
import { styles } from "@pagesHome/styles";
import React from "react";
import { Button, Container } from 'react-bootstrap';
export const FifthSession: React.FC = () => {
    return (
        <section className="p-3 text-center mb-3" style={styles.bgPrimaryGradient}>
            <Container className='p-5'>
                <SubTitleHighLighted text='Professional' hightLightedText='Translation services' />
                <Button className='text-uppercase mt-3' size='lg'>
                    order now
                </Button>
            </Container>
        </section>
    )
}