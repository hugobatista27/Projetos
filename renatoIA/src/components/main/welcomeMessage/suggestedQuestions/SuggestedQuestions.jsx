import './suggestedQuestions.css'
import { Suggestions } from "../../../generics/boxes/suggestions/Suggestions"
import { suggestions } from '../../../../../db/data'
export const SuggestedQuestions = () => {
  return (
    <div className='suggestedQuestions'>
        {suggestions.map((suggestion, index) => <Suggestions key={index} text={suggestion.message} img={suggestion.img}/>)}
    </div>
  )
}
