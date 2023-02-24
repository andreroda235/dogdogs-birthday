
import { useState } from 'react';

import classes from './GuessCard.module.css';

import QuestionMarkIcon from '../../Assets/Images/question-mark.png';
import giftIcon from '../../Assets/Images/gift.png';
import skullIcon from '../../Assets/Images/skull.png';
import { useDispatch } from 'react-redux';
import { attack, reward } from '../../Redux/gamestate-slice';

const GIFT = 0;
const ENEMY = -1;
const ATTACK = 25;

const GuessCard = ({index, turned, disabled, onFlip, prize, type}) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const dispatch = useDispatch();

    const flipCardHandler = () => {
        //make a queue for all the actions;
        if(!isFlipped){
            if(type === ENEMY)
                dispatch(attack({damage: ATTACK}));
            else if (type >= GIFT)
                dispatch(reward());
            setIsFlipped(true);
        }
    };

    const styles = {
        transform: 'rotateY(180deg)'
    }

    return (
        <div className={classes["flip-card"]} 
            onClick={flipCardHandler}>
            <div className={classes["flip-card-inner"]}
                style={isFlipped ? styles : undefined}>
                <div className={classes["flip-card-front"]}>
                    <img src={QuestionMarkIcon} alt="?"/>
                </div>
                <div className={classes["flip-card-back"]}>
                    <img src={type === ENEMY ? skullIcon : giftIcon} alt={type}/>
                </div>
            </div>
        </div>
    );
};

export default GuessCard;