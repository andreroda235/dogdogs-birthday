
import QuestionMarkIcon from '../../Assets/question-mark.png';

import classes from './GuessCard.module.css';

const GuessCard = ({children, index, turned, disabled, onFlip, prize}) => {

    

    return (
        <div class={classes["flip-card"]}>
            <div class={classes["flip-card-inner"]}>
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