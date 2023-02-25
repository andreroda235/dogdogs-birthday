import { createRef, useEffect, useState } from "react";
import { ANIMATION_TYPE_CARDFLIP, CARD_TYPE_ENEMY, CARD_TYPE_GIFT } from "../../../util/constants";

import Portal from './Portal';

import classes from './AnimationCardFlip.module.css';

import EnemyIcon from '../../../Assets/Images/orochimaru.jpg';
import QuestionMarkIcon from '../../../Assets/Images/question-mark.png';
import Backdrop from "../Backdrop";

const AnimationCardFlip = ({type, prize, onAnimationEnd}) => {
    const [animate, setAnimate] = useState(false);
    const cardFlipRef = createRef();

    useEffect(() => {
        if(cardFlipRef.current && !animate){
            const controller = new AbortController();
            cardFlipRef.current.addEventListener('transitionend', onAnimationEnd, false, controller);
            setAnimate(true);
            return () => controller.abort();
        }
    }, [setAnimate, cardFlipRef, onAnimationEnd, animate]);

    /* const styles = {
        transform: 'rotateY(180deg)'
    };
 */
    return (
        <Portal to={ANIMATION_TYPE_CARDFLIP}>
            <Backdrop>
                <div className={classes["flip-card"]}>
                    <div id="cardflipanimation" ref={cardFlipRef} className={classes["flip-card-inner"] + ' ' + (animate ? classes.animate : undefined)}>
                        <div className={classes["flip-card-front"]}>
                            <img src={QuestionMarkIcon} alt="?"/>
                        </div>
                        <div className={classes["flip-card-back"]}>
                            {type === CARD_TYPE_ENEMY && <img src={EnemyIcon} alt={type}/>}
                            {type >= CARD_TYPE_GIFT && <p>{prize}</p>}
                        </div>
                    </div>
                </div>
            </Backdrop>
        </Portal>
    );
};

export default AnimationCardFlip;