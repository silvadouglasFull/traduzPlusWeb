import { servicesList } from "@flavor/constants/servicesList";
import { useChangeLanguage as useChangeLanguageService } from "@hooks/useChangeLanguage/services";
import { Left } from "@pagesServices/layouts/secoundSection/layouts/left";
import { Right } from "@pagesServices/layouts/secoundSection/layouts/right";
import type React from "react";
export const SecoundSection: React.FC = () => {
    const { items: services } = useChangeLanguageService(servicesList)
    return (
        <section className="mb-3 p-3">
            {services.map((item, i) => (
                i % 2 === 0 ?
                    (
                        <Left key={item.id} {...item} />)
                    :
                    (
                        <Right key={item.id} {...item} />
                    )
            ))}
        </section>
    )
}