import { styles } from "@components/bradCumps/styles";
import { Title } from "@components/bradCumps/title";
import { useGetNamePage } from '@components/bradCumps/title/hooks/useGetNamePage';
import type { BreadcrumbsProps } from '@components/bradCumps/types';
import React from "react";
import { Container } from "react-bootstrap";
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ backgroundImage, ...props }: BreadcrumbsProps) => {
    const { namePage } = useGetNamePage()
    return (
        <section style={{
            ...styles.section,
            background: `url(${backgroundImage}) center center/cover no-repeat`,

        }} {...props} className="w-100">
            <Container>
                <Title style={{
                    position: 'absolute',
                    bottom: '15%',
                }} title={namePage} />
            </Container>
        </section>
    )
}