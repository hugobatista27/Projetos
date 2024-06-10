import { conversa } from "./chat-cafeteria"

const suggestions = [
    { 
        message: 'Quais os melhores livros sobre empreendedorismo?',
        img: '../public/chat/suggestions/book icon.png',
    },
    { 
        message: 'Como melhorar meu plano de negócio? ',
        img: '../public/chat/suggestions/money icon.png',
    },
    { 
        message: 'Qual a velocidade maxima do Kwid?',
        img: '../public/chat/suggestions/car icon.png',
    },
]

const projects = [
    {
        id: 1,
        name: 'Verde Café',
        proposal: {
            area: 'area',
            service: 'servico',
        },
        chat: conversa
    }
]

export { suggestions, projects }


// adicionar a funcao de clicar na logo ir para a mensagem de boas vindas