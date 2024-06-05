import './suggestedQuestions.css'
import { Suggestions } from "../../../generics/boxes/suggestions/Suggestions"

export const SuggestedQuestions = () => {
  return (
    <div className='suggestedQuestions'>
        <Suggestions text={'teste1'} img={'teste.png'}/>
        <Suggestions text={'teste2'} img={'teste.png'}/>
        <Suggestions text={'teste3'} img={'teste.png'}/>
    </div>
  )
}
