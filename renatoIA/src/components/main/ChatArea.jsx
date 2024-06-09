import './chatArea.css';
import { useContext } from "react";
import { Chat } from './chat/Chat';
import { WelcomeMessage } from "./welcomeMessage/WelcomeMessage";
import { SendMessage } from "./sendMessage/SendMessage";
import { ProjectContext } from '../../App';

export const ChatArea = () => {
    const { selectedProject } = useContext(ProjectContext)

    return (
        <div style={{display:'flex', flexGrow: '1', justifyContent:'center'}}>
            <div className="chat-area">
                <div>
                    {selectedProject ? <Chat/> : <WelcomeMessage/>
                    }
                </div>
                <SendMessage/>
            </div>
        </div>
    )
}
