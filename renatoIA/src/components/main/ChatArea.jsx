import './chatArea.css';
import { useState } from "react";
import { WelcomeMessage } from "./welcomeMessage/WelcomeMessage";
import { SendMessage } from "./sendMessage/SendMessage";
import { NewProjectButton } from "../sideBar/components/createNewProject/NewProjectButton";

export const ChatArea = () => {
    // project sera o objeto que contem os dados de projetos anteriores do usuario. Enquanto o usuario nao selecionar o projeto ou criar um novo uma mensagem de boas vindas sera exibida com algumas sugestoes de pergunta para serem feitas para a ia

    const [project, setProject] = useState();

    return (
        <div className="chat-area" style={{width: '920px'}}>
            {project ? <div>ChatArea</div> : <WelcomeMessage/>
            }
            <NewProjectButton isExpanded={true}/>
            <SendMessage/>
        </div>
    )
}
