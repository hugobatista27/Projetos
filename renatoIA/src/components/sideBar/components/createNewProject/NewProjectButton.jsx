import { useContext } from 'react';
import './newProjectButton.css'
import PropTypes from 'prop-types';
import { ProjectContext } from '../../../../App';

export const NewProjectButton = ({isExpanded}) => {
    NewProjectButton.propTypes = {
        isExpanded: PropTypes.bool.isRequired
    }

    const {projects, setProjects} = useContext(ProjectContext)

    const createNewProject = () => {
        console.log(projects);
        setProjects([...projects, {
            id: projects.length + 1,
            name: 'new project',
            proposal: {
                area: '',
                service: '',
            },
            chat: ['Olá, meu nome é Renato e sou uma inteligência artificial que auxilia na criação de planos de negócios. Antes de comerçarmos preciso de algumas informações, qual é a proposta da empresa?']
        }])
    }

    return (
        <button className='newProject' onClick={createNewProject}>
            <img src="/sideBar/plusicon.png" alt="plus icon" />
            <p className={isExpanded ? 'expanded' : 'closed'}>Criar novo projeto</p>
        </button>
    )
}
