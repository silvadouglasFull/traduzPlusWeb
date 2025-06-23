import type { Paragraph } from "@pages/components/paragraph/item/types"
import type { SubTitle } from "../types"

export const paragraphs: Array<Paragraph> = [
    {
        id: 1,
        text: `Over 12 Years of Excellence and Precision in Translation
Since 2012, we have provided professional translation and interpreting services with technical expertise and institutional standards. We work with a rigorously selected network of highly qualified linguists to deliver consistent, reliable results that meet the demands of the international landscape.`,
        language: 'en'
    },
    {
        id: 2,
        text: `自 2012 年以来，我们始终提供具备专业水准和技术实力的翻译与口译服务。我们拥有一支经过
严格甄选的高素质语言专家团队，确保为客户提供一致、可靠、符合国际标准的高质量成果。`,
        language: 'zh'
    },
    {
        id: 3,
        text: `Desde 2012, oferecemos serviços de tradução e interpretação com padrão profissional e domínio técnico.
Atuamos com uma rede altamente qualificada de linguistas especializados, selecionados com rigor, para
entregar resultados consistentes, confiáveis e alinhados às exigências do cenário internacional. `,
        language: 'pt'
    }
]
export const subTitle: SubTitle[] = [
    {
        id: 1,
        text: 'offering quality translation since 2012',
        description: 'Over 12 Years of Excellence and Precision in Translation',
        textButton: 'Learn More',
        language: 'en',
    },
    {
        id: 2,
        text: '12 年以上专业精准的语言服务经验',
        description: '自2012年以来提供高质量的翻译服务',
        textButton: '了解更多',
        language: 'zh',
    },
    {
        id: 3,
        text: 'Mais de 12 anos traduzindo com excelência e precisão',
        description: 'oferecendo tradução de qualidade desde 2012',
        textButton: 'Saiba mais',
        language: 'pt',
    }
]
