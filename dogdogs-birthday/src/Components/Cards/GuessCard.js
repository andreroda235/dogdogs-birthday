
import { useState } from 'react';
import QuestionMarkIcon from '../../Assets/question-mark.png';

import classes from './GuessCard.module.css';

const GuessCard = ({children, index, turned, disabled, onFlip, prize}) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const flipCardHandler = () => {
        setIsFlipped(true);
    };

    const styles = {
        transform: 'rotateY(180deg)'
    }

    return (
        <div class={classes["flip-card"]} 
            onClick={flipCardHandler}>
            <div class={classes["flip-card-inner"]}
                style={isFlipped ? styles : undefined}>
                <div class={classes["flip-card-front"]}>
                    <img src={QuestionMarkIcon} alt="?"/>
                </div>
                <div class={classes["flip-card-back"]}>
                    <p>{prize}</p>
                </div>
            </div>
        </div>
    );
};

export default GuessCard;