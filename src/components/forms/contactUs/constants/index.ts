import type { FormField, PreviewMessage, TButtonsLabels } from "@components/forms/contactUs/constants/types";

export const formLabels: FormField[] = [
    // English
    {
        id: 1,
        idControll: 'first_name',
        label: 'First Name',
        name: 'first_name',
        type: 'text',
        placeholder: 'Enter your first name',
        required: true,
        language: 'en'
    },
    {
        id: 2,
        idControll: 'last_name',
        label: 'Last Name',
        name: 'last_name',
        type: 'text',
        placeholder: 'Enter your last name',
        required: true,
        language: 'en'
    },
    {
        id: 3,
        idControll: 'email',
        label: 'E-mail',
        name: 'email',
        type: 'email',
        placeholder: 'Enter your e-mail',
        required: true,
        language: 'en'
    },
    {
        id: 4,
        idControll: 'phone',
        label: 'Phone',
        name: 'phone',
        type: 'tel',
        placeholder: 'Enter your phone number',
        required: false,
        language: 'en'
    },
    {
        id: 5,
        idControll: 'message',
        label: 'Your Message',
        name: 'message',
        type: 'textarea',
        placeholder: 'Write your message',
        required: true,
        language: 'en'
    },

    // Portuguese
    {
        id: 6,
        idControll: 'first_name',
        label: 'Nome',
        name: 'first_name',
        type: 'text',
        placeholder: 'Digite seu nome',
        required: true,
        language: 'pt'
    },
    {
        id: 7,
        idControll: 'last_name',
        label: 'Sobrenome',
        name: 'last_name',
        type: 'text',
        placeholder: 'Digite seu sobrenome',
        required: true,
        language: 'pt'
    },
    {
        id: 8,
        idControll: 'email',
        label: 'E-mail',
        name: 'email',
        type: 'email',
        placeholder: 'Digite seu e-mail',
        required: true,
        language: 'pt'
    },
    {
        id: 9,
        idControll: 'phone',
        label: 'Telefone',
        name: 'phone',
        type: 'tel',
        placeholder: 'Digite seu telefone',
        required: false,
        language: 'pt'
    },
    {
        id: 10,
        idControll: 'message',
        label: 'Sua mensagem',
        name: 'message',
        type: 'textarea',
        placeholder: 'Escreva sua mensagem',
        required: true,
        language: 'pt'
    },

    // Chinese Simplified
    {
        id: 11,
        idControll: 'first_name',
        label: '名字',
        name: 'first_name',
        type: 'text',
        placeholder: '输入您的名字',
        required: true,
        language: 'zh'
    },
    {
        id: 12,
        idControll: 'last_name',
        label: '姓氏',
        name: 'last_name',
        type: 'text',
        placeholder: '输入您的姓氏',
        required: true,
        language: 'zh'
    },
    {
        id: 13,
        idControll: 'email',
        label: '电子邮件',
        name: 'email',
        type: 'email',
        placeholder: '输入您的电子邮件',
        required: true,
        language: 'zh'
    },
    {
        id: 14,
        idControll: 'phone',
        label: '电话',
        name: 'phone',
        type: 'tel',
        placeholder: '输入您的电话号码',
        required: false,
        language: 'zh'
    },
    {
        id: 15,
        idControll: 'message',
        label: '您的留言',
        name: 'message',
        type: 'textarea',
        placeholder: '写下您的留言',
        required: true,
        language: 'zh'
    }
]

export const buttonsLabels: TButtonsLabels[] = [
    // English
    {
        text: 'Send Message',
        language: 'en'
    },
    {
        text: 'Order Now',
        language: 'en'
    },

    // Portuguese
    {
        text: 'Enviar Mensagem',
        language: 'pt'
    },
    {
        text: 'Fazer Pedido',
        language: 'pt'
    },

    // Chinese Simplified
    {
        text: '发送消息',
        language: 'zh'
    },
    {
        text: '立即下单',
        language: 'zh'
    }
];
export const previewMessage: PreviewMessage[] = [
    // English
    {
        id: 1,
        message: 'Hello, I would like to talk about this service.',
        language: 'en',
    },

    // Portuguese
    {
        id: 2,
        message: 'Olá, gostaria de falar sobre este serviço.',
        language: 'pt',
    },

    // Chinese Simplified
    {
        id: 3,
        message: '你好，我想了解这个服务。',
        language: 'zh',
    },
]