import "@components/bradCumps/styles.css";
import { Title } from '@components/bradCumps/title';
import { useGetNamePage } from '@components/bradCumps/title/hooks/useGetNamePage';
import type { BreadcrumbsProps } from '@components/bradCumps/types';
import React from "react";
import { Container } from 'react-bootstrap';
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ backgroundImage, ...props }: BreadcrumbsProps) => {
    const { namePage } = useGetNamePage()
    return (
        <section className="breadcrumbs-custom" style={{
            backgroundImage: `url(${backgroundImage})`
        }} {...props}>
            <div className="breadcrumbs-custom-inner">
                <Container>
                    <div className="breadcrumbs-custom-container">
                        <div className="breadcrumbs-custom-main">
                            <Title title={namePage} />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}