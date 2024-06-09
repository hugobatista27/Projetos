import './chat.css'
import { useContext, useRef, useEffect } from 'react'
import { ProjectContext } from '../../../App'
import PropTypes from 'prop-types';

export const Chat = () => {
    const { selectedProject, projects } = useContext(ProjectContext)
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [projects]);
    

    return (
        <div className='messagesArea'>
            {selectedProject.chat.map((msg, index) => {
                return (
                    <div key={index}>
                        {index % 2 === 0 ? 
                            <Message isUserMessage={false} msg={msg}/> : 
                            <Message isUserMessage={true} msg={msg}/>
                        }
                    </div>
                )
            })}
            <div ref={messagesEndRef}/>
        </div>
    )
}

const Message = ({isUserMessage, msg}) => {
    Message.propTypes = { 
        isUserMessage: PropTypes.bool.isRequired,
        msg: PropTypes.string.isRequired
    }

    return (
        <div className='messages'>
            <img src={isUserMessage ? '../../../../public/header/usericon.svg' : '../../../../public/header/iconlogo.svg'} alt="img" />
            <p>{msg}</p>
        </div>
    )
}