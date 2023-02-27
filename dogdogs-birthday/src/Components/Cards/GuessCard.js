
import { useState } from 'react';

import classes from './GuessCard.module.css';

import QuestionMarkIcon from '../../Assets/Images/question-mark.png';
import giftIcon from '../../Assets/Images/gift.png';
import skullIcon from '../../Assets/Images/skull.png';
import { useDispatch } from 'react-redux';
import { attack, requestAnimation, reward } from '../../Redux/gamestate-slice';
import { ANIMATION_TYPE_CARDFLIP } from '../../util/constants';

const GIFT = 0;
const ENEMY = -1;
const ATTACK = 25;

const GuessCard = ({index, turned, disabled, onFlip, prize, type}) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const dispatch = useDispatch();
 
    /* const flipCardHandler = (isValid) => {
        
        
    }; */

    const cardAction = () => {
        if(!isFlipped){
            if(type === ENEMY)
                dispatch(attack({damage: ATTACK}));
            else if (type >= GIFT)
                dispatch(reward());

            setIsFlipped(true);
        }
    };

    const flipCardHandler = () => {
        if(!isFlipped)
            dispatch(requestAnimation({
                animationType: ANIMATION_TYPE_CARDFLIP,
                postAnimationAction: cardAction,
                data: {
                    type: type,
                    prize,
                }
            }));
    };

    const styles = {
        transform: 'rotateY(180deg)'
    }

    return (
        <div className={classes["flip-card"]} 
            onClick={flipCardHandler}>
            <div className={classes["flip-card-inner"]}
                style={isFlipped ? styles : undefined}>
                <div className={classes["flip-card-front"] + ' ' + (type === ENEMY ? classes['front-card-enemy'] : classes['front-card-gift'] )}>
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