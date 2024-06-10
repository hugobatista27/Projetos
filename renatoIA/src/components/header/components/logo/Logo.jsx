import './logo.css'
import { useContext } from 'react'
import { ProjectContext } from '../../../../App'

export const Logo = () => {
  const { setSelectedProject } = useContext(ProjectContext)

  const handleProject = () => {
    setSelectedProject('')
  }

  return (
    <div className="logo">
        {/* adicionar link para a pagina home */}
        <button onClick={handleProject}>
            <img src="../../../../../public/header/iconlogo.svg" alt="logo" />
            <h1>RenatoIA</h1>
        </button>
    </div>
  )
}
