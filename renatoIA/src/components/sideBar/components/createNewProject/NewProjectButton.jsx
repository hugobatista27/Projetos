import { useContext } from 'react';
import './newProjectButton.css'
import PropTypes from 'prop-types';
import { ProjectContext } from '../../../../App';

export const NewProjectButton = ({isExpanded}) => {
    NewProjectButton.propTypes = {
        isExpanded: PropTypes.bool.isRequired
    }

    const {projects, setProjects, setSelectedProject} = useContext(ProjectContext)

    const createNewProject = () => {
        setProjects([...projects, {
            id: projects[projects.length - 1].index,
            name: 'new project',
            proposal: {
                area: '',
                service: '',
            },
            chat: []
        }])

        setSelectedProject(projects[projects.length - 1])

        console.log(projects);
    }

    return (
        <button className='newProject' onClick={createNewProject}>
            <img src="/sideBar/plusicon.png" alt="plus icon" />
            <p className={isExpanded ? 'expanded' : 'closed'}>Criar novo projeto</p>
        </button>
    )
}
