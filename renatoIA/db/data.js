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
        name: 'nome',
        proposal: {
            area: 'area',
            service: 'servico',
        },
        chat: ['ola', 'ola', 'tudo bom', 'tudo']
    },
    {
        id: 2,
        name: 'projeto 2',
        proposal: {
            area: 'area',
            service: 'servico',
        },
        chat: ['ola', 'ola', 'tudo bom', 'tudo']
    }
]

export { suggestions, projects }