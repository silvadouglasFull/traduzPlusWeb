import type { Paragraph } from "@pages/components/paragraph/item/types"
import type { SubTitle } from "../types"

export const paragraphs: Array<Paragraph> = [
    {
        id: 1,
        text: 'With over 20 years of professional experience in translation and interpreting, we utilize a rigorously tested network of industry-expert linguists to ensure the best results.',
        language: 'en'
    },
    {
        id: 2,
        text: '拥有超过20年的翻译和口译专业经验，我们利用经过严格测试的行业专家语言学家网络，以确保最佳的成果。',
        language: 'zh'
    },
    {
        id: 3,
        text: 'Com mais de 20 anos de experiência profissional em tradução e interpretação, utilizamos uma rede de linguistas especialistas no setor, rigorosamente testada, para garantir os melhores resultados.',
        language: 'pt'
    }
]
export const subTitle: SubTitle[] = [
    {
        id: 1,
        text: 'Great Industry Expertise',
        description: 'providing quality Translation since 1999',
        textButton: 'Learn More',
        language: 'en',
    },
    {
        id: 2,
        text: '卓越的行业专业知识',
        description: '自1999年以来提供高质量的翻译服务',
        textButton: '了解更多',
        language: 'zh',
    },
    {
        id: 3,
        text: 'Grande expertise no setor',
        description: 'oferecendo tradução de qualidade desde 1999',
        textButton: 'Saiba mais',
        language: 'pt',
    }
]
