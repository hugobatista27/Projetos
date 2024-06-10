import './sideBar.css'
import { useContext, useState } from "react";
import { NewProjectButton } from './components/createNewProject/NewProjectButton';
import { ProjectContext } from '../../App';

export const SideBar = () => {
    const { projects, setSelectedProject } = useContext(ProjectContext)
    const [expandSideBar, setExpandSideBar] = useState(false);

    const handleSideBar = () => {
        setExpandSideBar(!expandSideBar)
        console.log(expandSideBar);
    }

    const handleProject = (changeToProject) => {
        setSelectedProject(projects[changeToProject])
    }

    return (
        <aside className='sideBar'>
            <button onClick={handleSideBar}>
                <img src="/sideBar/menu.png" alt="" />
            </button>
            {projects.map((project, index) => {
                if (expandSideBar) {
                    return <button className='select-project-button' onClick={() => handleProject(index)} key={index}>{project.name}</button>      
                }
            })}
            <NewProjectButton isExpanded={expandSideBar}/>
        </aside>
    )
}
