import './suggestions.css';
import PropTypes from 'prop-types';

export const Suggestions = ({text, img}) => {
    Suggestions.propTypes = {
        text: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
    }

    return (
        <div className='promptSuggestion'>
            <p>{text}</p>
            <img src={img} alt="icon" />
        </div>
    )
}
