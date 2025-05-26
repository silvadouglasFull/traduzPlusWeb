import type { SubTitle } from "@flavor/constants/texts/home/types"
import type { Paragraph } from "@pages/components/paragraph/item/types"

export const paragraphs: Array<Paragraph> = [
    {
        id: 1,
        text: 'Great Wall Soluções Linguisticas is a global translation services company with a revolutionary set of quality control methods and radical subject matter expertise.',
        language: 'en'
    },
    {
        id: 2,
        text: 'With a core group of more than 700 professional linguists operating from six continents, we serve the world’s most recognized companies in fields such as manufacturing, law, finance, insurance, food, retail, distribution etc.',
        language: 'en'
    },
    // Tradução para Chinês
    {
        id: 3,
        text: 'Great Wall Soluções Linguisticas 是一家全球翻译服务公司，拥有革命性的质量控制方法和深厚的专业知识。',
        language: 'zh'
    },
    {
        id: 4,
        text: '我们拥有由700多名专业语言学家组成的核心团队，遍布六大洲，为制造、法律、金融、保险、食品、零售、分销等领域的全球知名企业提供服务。',
        language: 'zh'
    },
    // Tradução para Português
    {
        id: 5,
        text: 'A Great Wall Soluções Linguisticas é uma empresa global de serviços de tradução, com um conjunto revolucionário de métodos de controle de qualidade e expertise avançada em diversos setores.',
        language: 'pt'
    },
    {
        id: 6,
        text: 'Com um grupo central de mais de 700 linguistas profissionais atuando em seis continentes, atendemos as empresas mais reconhecidas do mundo nos setores de manufatura, direito, finanças, seguros, alimentos, varejo, distribuição, entre outros.',
        language: 'pt'
    }
]

export const subTitle: SubTitle[] = [
    {
        id: 1,
        text: 'A Few Words About us',
        language: 'en',
        textButton: 'Learn More'
    },
    {
        id: 2,
        text: '关于我们的几句话',
        language: 'zh',
        textButton: '了解更多'
    },
    {
        id: 3,
        text: 'Algumas palavras sobre nós',
        language: 'pt',
        textButton: 'Ler mais'
    }
]
