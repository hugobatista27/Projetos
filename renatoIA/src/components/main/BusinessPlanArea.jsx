import { useState } from "react";
import PropTypes from 'prop-types';
import './business-plan.css'


export const BusinessPlanArea = ({text}) => {
    BusinessPlanArea.propTypes = {
        text: PropTypes.string
    }
    
    const [showBusinessPlan, setShowBusinessPlan] = useState(false);

    const toggleExhibition = () => {
        setShowBusinessPlan(!showBusinessPlan);
        console.log('mudou');
    }

    return (
        <div className="business-plan-area">
            <button onClick={toggleExhibition}>
                {'<'}
            </button>
            <div className="business-plan" style={{width: showBusinessPlan ? '530px' : '0px'}}>
                <h2>Plano de negócios</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
