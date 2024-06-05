import { useState } from "react";
import { WelcomeMessage } from "./welcomeMessage/WelcomeMessage";

export const ChatArea = () => {
    // project sera o objeto que contem os dados de projetos anteriores do usuario. Enquanto o usuario nao selecionar o projeto ou criar um novo uma mensagem de boas vindas sera exibida com algumas sugestoes de pergunta para serem feitas para a ia

    const [project, setProject] = useState();

    return (
        <div style={{width: '920px'}}>
            {project ? <div>ChatArea</div> : <WelcomeMessage/>
            }
            
        </div>
    )
}
