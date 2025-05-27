import type { Paragraph } from "@pages/components/paragraph/item/types"
import type { SubTitle } from "../types"

export const paragraphs: Array<Paragraph> = [
    {
        id: 1,
        text: `At Great Wall Language Solutions, we provide high-level linguistic and strategic
services designed for organizations and professionals who operate—or aim to
operate—across Brazil and China. Our Solutions reflect precision, discretion, and real
results in a competitive global context.`,
        language: 'en'
    },
    {
        id: 2,
        text: `在 长城语言解决方案公司，我们专为希望进入巴西市场的中国企业提供高水平、
战略性的语言与本地化支持服务。我们的目标是帮助企业在文化与制度差异中做
出明智决策，稳步推进业务发展。`,
        language: 'zh'
    },
    {
        id: 3,
        text: `Na Great Wall Language Solutions, oferecemos soluções linguísƟcas e estratégicas com
o mais alto padrão de qualidade, sempre guiados por um compromisso com a
excelência, o rigor e a clareza. Nossos serviços são projetados para empresas e
indivíduos que exigem precisão, discrição e resultados concretos no cenário sinobrasileiro e global. `,
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
