import { SuggestedQuestions } from "./suggestedQuestions/SuggestedQuestions"
import './welcomeMessage.css'
let name = "NOME_TESTE"

export const WelcomeMessage = () => {
  return (
    <div >
        <div className="welcomeMessage">
            <h1>Olá, {name}</h1>
            <h2>Posso ajudar?</h2>
        </div>
        <SuggestedQuestions/>
    </div>
  )
}
