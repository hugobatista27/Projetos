import { SuggestedQuestions } from "./suggestedQuestions/SuggestedQuestions"
import './welcomeMessage.css'
import { NewProjectButton } from "../../sideBar/components/createNewProject/NewProjectButton"
let name = "Maciel"


export const WelcomeMessage = () => {
  return (
    <div className="message-area-welcome">
        <div className="welcomeMessage">
            <h1>Olá, {name}</h1>
            <h2>Posso ajudar?</h2>
        </div>
        <SuggestedQuestions/>
        <NewProjectButton isExpanded={true}/>
    </div>
  )
}
