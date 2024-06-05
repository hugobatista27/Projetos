import './chatArea.css';
import { useState } from "react";
import { WelcomeMessage } from "./welcomeMessage/WelcomeMessage";
import { SendMessage } from "./sendMessage/SendMessage";
import { NewProjectButton } from "../sideBar/components/createNewProject/NewProjectButton";

export const ChatArea = () => {
    // project sera o objeto que contem os dados de projetos anteriores do usuario. Enquanto o usuario nao selecionar o projeto ou criar um novo uma mensagem de boas vindas sera exibida com algumas sugestoes de pergunta para serem feitas para a ia

    const [project, setProject] = useState();

    return (
        <div style={{display:'flex', flexGrow: '1', justifyContent:'center'}}>
            <div className="chat-area">
                <div>
                    {project ? <div>ChatArea</div> : <WelcomeMessage/>
                    }
                    <NewProjectButton isExpanded={true}/>
                </div>
                <SendMessage/>
            </div>
        </div>
    )
}
