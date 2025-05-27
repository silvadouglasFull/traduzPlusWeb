import type { SubTitle } from "@flavor/constants/texts/home/types"
import type { Paragraph } from "@pages/components/paragraph/item/types"

export const paragraphs: Array<Paragraph> = [
    {
        id: 1,
        text: `Great Wall Language Solutions is a specialized provider focused on bridging Mandarin Chinese, Portuguese, and English. Founded in 2012, we began by offering interpreting services for Brazilians and Chinese professionals facing communication barriers. This revealed a significant gap between two economically connected nations, inspiring us to become a reliable bridge that fosters clear and respectful understanding.`,
        language: 'en'
    },
    {
        id: 2,
        text: 'Unlike broad language agencies, we focus deeply on the languages driving Brazil-China trade and collaboration. Our team has lived and studied in China, gaining deep cultural and linguistic insight to ensure effective communication. We also use advanced language technologies and provide strategic consulting tailored to clients’ goals, helping businesses navigate and succeed in the complex Sino-Brazilian market.',
        language: 'en'
    },
    // Tradução para Chinês
    {
        id: 3,
        text: '长城语言解决方案公司专注于中文普通话、葡萄牙语和英语的专业语言服务。自2012年起，我们为中巴两国因语言障碍导致的沟通困难提供口译服务，发现两国之间存在巨大沟通鸿沟。基于此，我们致力于成为连接中巴文化与商业的桥梁，推动双方的理解与合作。',
        language: 'zh'
    },
    {
        id: 4,
        text: '我们拥有一支在中国生活学习多年的语言专家团队，深入掌握语言细节和文化差异，确保高效且得体的沟通。结合领先的语言技术，我们不仅提供翻译和口译，还为客户量身定制中巴市场的战略咨询，帮助客户规避风险，把握机遇，实现商业成功。',
        language: 'zh'
    },
    // Tradução para Português
    {
        id: 5,
        text: `A Great Wall Language Solutions é especializada em serviços linguísticos focados em mandarim, português e inglês. Nosso objetivo é eliminar barreiras de comunicação por meio de tradução, interpretação e treinamento de alta qualidade. Desde 2012, conectamos brasileiros e chineses em negócios, preenchendo uma grande lacuna entre esses países com potencial econômico.`,
        language: 'pt'
    },
    {
        id: 6,
        text: 'Optamos por ser uma ponte sólida, focando profundamente nas línguas que impulsionam a relação Brasil-China. Nossa equipe, que viveu e estudou na China, possui entendimento cultural e linguístico que garante uma comunicação eficaz e respeitosa. Utilizamos também tecnologias avançadas para garantir precisão e sensibilidade cultural em todos os projetos.',
        language: 'pt'
    },
    {
        id: 7,
        text: `Além dos serviços tradicionais, oferecemos consultoria estratégica personalizada para os mercados chinês e brasileiro. Com amplo conhecimento cultural e comercial, ajudamos a reduzir riscos e maximizar oportunidades, transformando informação em vantagem competitiva para empresas que atuam entre esses dois mercados dinâmicos.`,
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
