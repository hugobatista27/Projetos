import './App.css'
import { Header } from './components/header/Header'
import { SideBar } from './components/sideBar/SideBar'
import { ChatArea } from './components/main/ChatArea';

function App() {

  return (
    <main>
      <SideBar/>
      <div className='full-width'>
        <Header/>
        <div style={{display: 'flex'}}>
          <ChatArea/>
          <div>plano de negocio</div>
        </div>
      </div>
    </main>
  )
}

export default App
