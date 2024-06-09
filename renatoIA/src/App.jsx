import './App.css'
import { projects as userProjects } from '../db/data';
import { Header } from './components/header/Header'
import { SideBar } from './components/sideBar/SideBar'
import { ChatArea } from './components/main/ChatArea';
import { BusinessPlanArea } from './components/main/BusinessPlanArea';
import { createContext, useState } from 'react';

const ProjectContext = createContext(null);

function App() {
  const [projects, setProjects] = useState(userProjects)
  const [selectedProject, setSelectedProject] = useState()


  const contextValues = {
    projects,
    setProjects,
    selectedProject,
    setSelectedProject
  }

  return (
    <ProjectContext.Provider value={contextValues}>
      <main>
        <SideBar/>
        <div className='full-width' style={{display: 'flex', flexDirection: 'column'}}>
          <Header/>
          <div className='content'>
            <ChatArea/>
            <BusinessPlanArea/>
          </div>
        </div>
      </main>
    </ProjectContext.Provider>
  )
}

export { ProjectContext }
export default App
