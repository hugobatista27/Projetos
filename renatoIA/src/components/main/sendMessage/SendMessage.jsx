import './sendMessage.css';
import { ProjectContext } from '../../../App';
import { useContext } from 'react';

export const SendMessage = () => {
    // criar a funcao ded enviar texto e recerber a resposta
    const { selectedProject, projects, setProjects } = useContext(ProjectContext);

    const newMessage = (event) => {
        console.log(event.key);
        if (event.key === 'Enter') {
            let copyProjects = [...projects]
            copyProjects[selectedProject.id - 1].chat.push(event.target.value)
            setProjects(copyProjects)
            event.target.value = ''
        }
    }
    
    return (
        <div className='sendMessage'>
            <input onKeyDown={newMessage} type="text" name="" id="" placeholder='Digite sua mensagem ou pergunta.'/>
            <img src="/chat/microphone.svg" alt="microphone" />
        </div>
    )
}
