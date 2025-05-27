import type { SubTitle } from "@flavor/constants/texts/types";
import type { Paragraph } from "@pages/components/paragraph/item/types";

export const paragraphs: Array<Paragraph> = [
    // English
    {
        id: 1,
        language: 'en',
        text: 'Valebats sunt racanas de clemens rumor. Est nobilis historia, cesaris. Nunquam carpseris historia. Ubi est fidelis rumor? Domesticus apolloniatess ducunt ad usus. Barcass mori, tanquam magnum ionicis tormento. Cum calceus accelerare, omnes guttuses desiderium fidelis, alter castores.',
    },

    // Portuguese
    {
        id: 2,
        language: 'pt',
        text: 'Valebats são racanas de um rumor calmo. Existe uma história nobre, de César. Nunca ignores a história. Onde está o rumor fiel? Apolloniatess domésticos conduzem ao uso. Barcass morre, como um grande tormento iônico. Quando o sapato acelera, todos os guttuses desejam fidelidade, outro castor.',
    },

    // Chinese Simplified
    {
        id: 3,
        language: 'zh',
        text: 'Valebats 是关于温和谣言的 racanas。这里有一段高贵的凯撒历史。永远不要忽视历史。忠实的谣言在哪里？家用的 apolloniatess 引导实用。Barcass 死去，如同巨大的电离折磨。当鞋子加速时，所有的 guttuses 渴望忠诚，另一个海狸。',
    },
];
export const subTitles: SubTitle[] = [
    // English
    {
        id: 0,
        text: 'Overview',
        language: 'en',
        textButton: 'View our services',
    },

    // Portuguese
    {
        id: 1,
        text: 'Visão Geral',
        language: 'pt',
        textButton: 'Veja nossos serviços',
    },

    // Chinese Simplified
    {
        id: 2,
        text: '概述',
        language: 'zh',
        textButton: '查看我们的服务',
    },
]