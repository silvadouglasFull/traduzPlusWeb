import type { Paragraph } from "@pages/components/paragraph/item/types"
import type { SubTitle } from "../types"

export const paragraphs: Array<Paragraph> = [
    {
        id: 1,
        text: 'In this section, you can learn more about the services Great Wall Soluções Linguisticas offers to its clients. We are always ready to provide you with quality translation and interpreting services.',
        language: 'en'
    },
    {
        id: 2,
        text: '在本节中，您可以了解 Great Wall Soluções Linguisticas 为客户提供的服务。我们始终准备为您提供高质量的翻译和口译服务。',
        language: 'zh'
    },
    {
        id: 3,
        text: 'Nesta seção, você pode saber mais sobre os serviços que a Great Wall Soluções Linguísticas oferece aos seus clientes. Estamos sempre prontos para fornecer serviços de tradução e interpretação de qualidade.',
        language: 'pt'
    }
]
export const subTitle: SubTitle[] = [
    {
        id: 1,
        text: 'What we offer',
        language: 'en',
        textButton: 'Learn More'
    },
    {
        id: 2,
        text: '我们的服务',
        language: 'zh',
        textButton: '了解更多'
    },
    {
        id: 3,
        text: 'O que oferecemos',
        language: 'pt',
        textButton: 'Saiba mais'
    }
]
