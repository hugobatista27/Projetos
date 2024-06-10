import { useState, useContext } from "react";
import PropTypes from 'prop-types';
import './business-plan.css'
import { ProjectContext } from '../../App'

export const BusinessPlanArea = () => {
    BusinessPlanArea.propTypes = {
        text: PropTypes.string
    }

    const { selectedProject } = useContext(ProjectContext);
    
    const [showBusinessPlan, setShowBusinessPlan] = useState(false);

    const toggleExhibition = () => {
        setShowBusinessPlan(!showBusinessPlan);
    }

    return (
        <div className="business-plan-area">
            <button onClick={toggleExhibition}>
                <img src="../../../public/arrow.svg" alt="fechar/abrir" style={{rotate: showBusinessPlan ? '180deg' : '0deg'}}/>
            </button>
            {selectedProject && 
                <div className={showBusinessPlan ? 'business-plan' : 'business-plan business-plan-closed'}>
                    <h1>Plano de Negócios</h1>
                    <div className="section">
                        <h2>Resumo Executivo</h2>
                        <p>Nossa cafeteria, Verde Café, é dedicada a oferecer uma experiência única, focada em sustentabilidade e produtos orgânicos. Localizada no coração da cidade, nosso objetivo é atrair um público consciente e apaixonado por qualidade. Pretendemos abrir nossas portas no início de 2025, com a visão de expandir para outras localidades nos próximos cinco anos. Nossa missão é proporcionar um ambiente acolhedor e ecologicamente responsável, enquanto servimos os melhores cafés e produtos orgânicos da região.</p>
                    </div>
                    <div className="section">
                        <h2>Descrição da Empresa</h2>
                        <p><strong>Visão:</strong> Ser a principal referência em sustentabilidade e qualidade no setor de cafeterias.</p>
                        <p><strong>Missão:</strong> Promover um estilo de vida saudável e sustentável, oferecendo produtos orgânicos e um ambiente acolhedor.</p>
                        <p><strong>Valores:</strong> Qualidade, responsabilidade ambiental e comunidade.</p>
                        <p><strong>História:</strong> Verde Café nasceu da observação de uma lacuna no mercado local para opções de consumo sustentável. Fundada por [Seu Nome], um apaixonado por café e sustentabilidade, a empresa visa transformar a maneira como as pessoas consomem e interagem com produtos de cafeteria.</p>
                    </div>
                    <div className="section">
                        <h2>Análise de Mercado</h2>
                        <p><strong>Segmento de Clientes:</strong> Jovens adultos, profissionais urbanos, consumidores conscientes de saúde e sustentabilidade.</p>
                        <p><strong>Concorrência:</strong> Embora existam várias cafeterias, poucas oferecem produtos orgânicos e um enfoque sustentável. Concorrentes diretos incluem [Nomes das Cafeterias Concorrentes].</p>
                        <p><strong>Tendências de Mercado:</strong> Crescente interesse em produtos orgânicos, aumento da conscientização sobre sustentabilidade e responsabilidade ambiental.</p>
                    </div>
                    <div className="section">
                        <h2>Organização e Gestão</h2>
                        <p><strong>Fundador:</strong> [Seu Nome] - Responsável pela visão estratégica e operações gerais.</p>
                        <p><strong>Gerente de Cafeteria:</strong> [Nome] - Gerenciamento diário, sustentabilidade.</p>
                        <p><strong>Chef:</strong> [Nome] - Desenvolvimento de cardápio orgânico.</p>
                        <p><strong>Baristas:</strong> Equipe treinada para garantir qualidade e consistência.</p>
                    </div>
                    <div className="section">
                        <h2>Linha de Produtos/Serviços</h2>
                        <p><strong>Café:</strong> Variedade de cafés orgânicos, incluindo espresso, cappuccino, latte, e mais.</p>
                        <p><strong>Chás:</strong> Seleção de chás orgânicos.</p>
                        <p><strong>Sucos Naturais:</strong> Sucos feitos na hora com frutas orgânicas.</p>
                        <p><strong>Lanches e Sobremesas:</strong> Sanduíches, saladas, bolos e biscoitos feitos com ingredientes orgânicos e locais.</p>
                    </div>
                    <div className="section">
                        <h2>Marketing e Vendas</h2>
                        <p><strong>Estratégia de Marketing:</strong> Utilização de redes sociais, parcerias com influenciadores, eventos e workshops sobre sustentabilidade.</p>
                        <p><strong>Programas de Fidelidade:</strong> Cartões de fidelidade e promoções especiais para clientes recorrentes.</p>
                        <p><strong>Eventos:</strong> Sessões de degustação, workshops de barista, e palestras sobre sustentabilidade.</p>
                    </div>
                    <div className="section">
                        <h2>Pedido de Financiamento</h2>
                        <p><strong>Montante Necessário:</strong> $150,000</p>
                        <p><strong>Uso dos Fundos:</strong></p>
                        <ul>
                            <li>Aluguel e reforma do espaço: $50,000</li>
                            <li>Compra de equipamentos: $40,000</li>
                            <li>Estoque inicial de produtos orgânicos: $30,000</li>
                            <li>Marketing inicial: $20,000</li>
                            <li>Capital de giro: $10,000</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h2>Projeções Financeiras</h2>
                        <p><strong>Ano 1:</strong></p>
                        <ul>
                            <li>Receita: $200,000</li>
                            <li>Despesas: $150,000</li>
                            <li>Lucro: $50,000</li>
                        </ul>
                        <p><strong>Ano 2:</strong></p>
                        <ul>
                            <li>Receita: $250,000</li>
                            <li>Despesas: $180,000</li>
                            <li>Lucro: $70,000</li>
                        </ul>
                        <p><strong>Ano 3:</strong></p>
                        <ul>
                            <li>Receita: $300,000</li>
                            <li>Despesas: $210,000</li>
                            <li>Lucro: $90,000</li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

