import './chat.css'
import { useContext } from 'react'
import { ProjectContext } from '../../../App'
import PropTypes from 'prop-types';

export const Chat = () => {
    const { selectedProject } = useContext(ProjectContext)

    return (
        <div>
            {selectedProject.chat.map((msg, index) => {
                return (
                    <div key={index}>{index % 2 === 0 ? <Message isUserMessage={false} msg={msg}/> : <Message isUserMessage={true} msg={msg}/>}</div>
                )
            })}
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