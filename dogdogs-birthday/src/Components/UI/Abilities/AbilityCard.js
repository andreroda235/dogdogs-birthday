import { useState } from "react";

import classes from './AbilityCard.module.css';

import QuestionMarkIcon from '../../../Assets/Images/question-mark.png'; 

const AbilityCard = ({children, isFlipped }) => {

    /* const [isFlipped, setIdFippled] = useState(false); */

    return (
        <div className={classes["flip-card"]}>
            <div className={classes["flip-card-inner"] + ' ' + (isFlipped ? classes.animate : undefined)}>
                <div className={classes["flip-card-front"]}>
                    <img src={QuestionMarkIcon} alt="?"/>
                </div>
                <div className={classes["flip-card-back"]}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AbilityCard;