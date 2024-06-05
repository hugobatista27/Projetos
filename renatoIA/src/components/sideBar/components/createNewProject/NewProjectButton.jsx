import './newProjectButton.css'
import PropTypes from 'prop-types';

export const NewProjectButton = ({isExpanded}) => {
    NewProjectButton.propTypes = {
        isExpanded: PropTypes.bool.isRequired
    }

    return (
        <button className='newProject'>
            <img src="../../../../../public/sideBar/plusicon.png" alt="plus icon" />
            <p className={isExpanded ? 'expanded' : 'closed'}>Criar novo projeto</p>
        </button>
    )
}
