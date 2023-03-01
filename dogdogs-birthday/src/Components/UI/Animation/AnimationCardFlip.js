import { createRef, useEffect, useState } from "react";
import { ANIMATION_TYPE_CARDFLIP, CARD_TYPE_ENEMY, CARD_TYPE_GIFT } from "../../../util/constants";

import Portal from './Portal';

import classes from './AnimationCardFlip.module.css';

import EnemyIcon from '../../../Assets/Images/orochimaru.jpg';
import QuestionMarkIcon from '../../../Assets/Images/question-mark.png';
import Backdrop from "../Backdrop";
import { useDispatch, useSelector } from "react-redux";
import { playEnemySFX, resetPlayEnemySFX, saveGift, updateCurrentCardDuration } from "../../../Redux/gamestate-slice";


let timeout;

const AnimationCardFlip = ({type, prize, onAnimationEnd}) => {
    const [animate, setAnimate] = useState(false);
    const cardFlipRef = createRef();
    const [hasAnimated, setHasAnimated] = useState(false);
    const dispatch = useDispatch();
    const duration = useSelector(state => state.durationStacking);
    
    console.log(prize);

    useEffect(() => {
        if(cardFlipRef.current && !animate){
            const controller = new AbortController();
            cardFlipRef.current.addEventListener('transitionend', animationDone, false, controller);
            setAnimate(true);
            return () => controller.abort();
        }
    }, [setAnimate, cardFlipRef, onAnimationEnd, animate]);


    const animationDone = () => {
        if(type >= CARD_TYPE_GIFT && prize.stacking)
            dispatch(updateCurrentCardDuration(prize.stacking));
        setHasAnimated(true);
        if(type === CARD_TYPE_ENEMY){
            dispatch(playEnemySFX());
            timeout = setTimeout(() => {
                clearTimeout(timeout);
                dispatch(resetPlayEnemySFX())
              }, 3500);
        }
    };

    let durationContent = "";
    if(type >= CARD_TYPE_GIFT && prize.duration ){
        durationContent = 'a week!';
        if(duration === 1)
            durationContent = '1 month!';
        else if (duration === 2)
            durationContent = '1 year!';
    }

    const closeCardDisplayHandler = () => {
        if(hasAnimated){
            dispatch(resetPlayEnemySFX());
            clearTimeout(timeout);
            if(type >= CARD_TYPE_GIFT)
                dispatch(saveGift(prize.prize + durationContent + '\n'));
            onAnimationEnd();
        }
    };
    
    return (
        <Portal to={ANIMATION_TYPE_CARDFLIP}>
            <Backdrop>
                <div style={hasAnimated ? {cursor: 'pointer'} : {}} onClick={closeCardDisplayHandler} className={classes["flip-card"]}>
                    <div id="cardflipanimation" ref={cardFlipRef} className={classes["flip-card-inner"] + ' ' + (animate ? classes.animate : undefined)}>
                        <div className={classes["flip-card-front"]}>
                            <img src={QuestionMarkIcon} alt="?"/>
                        </div>
                        <div className={classes["flip-card-back"] + ' ' +  (type >= CARD_TYPE_GIFT && classes['flip-card-back-prize'])}>
                            {type === CARD_TYPE_ENEMY && <img src={EnemyIcon} alt={type}/>}
                            {type >= CARD_TYPE_GIFT && 
                                <div className={classes['flip-card-back-prize-content']}>
                                    <p>{prize.prize}</p>
                                    {prize.duration && <p className={classes['duration-' + duration]}>{durationContent}</p>}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Backdrop>
        </Portal>
    );
};

export default AnimationCardFlip;