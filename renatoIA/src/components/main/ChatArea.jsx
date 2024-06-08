import './chatArea.css';
import { useContext } from "react";
import { WelcomeMessage } from "./welcomeMessage/WelcomeMessage";
import { SendMessage } from "./sendMessage/SendMessage";
import { NewProjectButton } from "../sideBar/components/createNewProject/NewProjectButton";
import { ProjectContext } from '../../App';

export const ChatArea = () => {
    const { selectedProject } = useContext(ProjectContext)

    return (
        <div style={{display:'flex', flexGrow: '1', justifyContent:'center'}}>
            <div className="chat-area">
                <div>
                    {selectedProject ? <div>{selectedProject.name}</div> : <WelcomeMessage/>
                    }
                    <NewProjectButton isExpanded={true}/>
                </div>
                <SendMessage/>
            </div>
        </div>
    )
}
