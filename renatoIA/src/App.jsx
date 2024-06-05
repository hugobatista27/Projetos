import './App.css'
import { Header } from './components/header/Header'
import { SideBar } from './components/sideBar/SideBar'
import { ChatArea } from './components/main/ChatArea';
import { BusinessPlanArea } from './components/main/BusinessPlanArea';

function App() {

  return (
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
  )
}

export default App
