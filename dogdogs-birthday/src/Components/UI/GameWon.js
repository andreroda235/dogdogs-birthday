import { useDispatch, useSelector } from 'react-redux';

import numbers from '../../util/number-imports';

import classes from './GameWon.module.css';
import backDropClasses from './Backdrop.module.css';

import victoryImg from '../../Assets/Images/victory.png';
import { newGameState } from '../../Redux/gamestate-slice';
import { GAMESTATE_CREDITS } from '../../util/constants';
import { saveAs } from 'file-saver';

const GameWon = () => {

    const dispatch = useDispatch();
    const player = useSelector(state => state.player);
    const streak = useSelector(state => state.highestStreak);
    const giftCollection = useSelector(state => state.gifts);
    
    const radix = Math.floor(streak / 10);
    const digit = streak % 10;

    const continueHandler = () => {
        const blob = new Blob(giftCollection, {type: "text/plain;charset=utf-8" });
        saveAs(blob, "HAPPY-BIRTHDAY-DOGDOG.txt");

        dispatch(newGameState(GAMESTATE_CREDITS));
    };

    return (
        <div className={classes['game-won'] + ' ' + 
            backDropClasses.backdrop + ' ' + 
            backDropClasses.black}>
            <h1 className={classes.animate 
            + ' ' + classes.fourth}>{'CONGRATULATIONS! '}</h1>
            <h2 className={classes['game-won-player'] + ' ' + 
            classes.animate + ' ' + classes.first}>{player}</h2>
            <h1 className={classes.animate 
            + ' ' + classes.second}>YOU DID IT!</h1>
            <h2 className={classes['game-won-streak'] + ' ' + 
            classes.animate + ' ' + classes.third}>Highest Streak:</h2>
            <div className={classes.streak + ' ' + 
            classes.animate + ' ' + classes.third}>
                {radix !== 0 && <img src={numbers[radix]} alt={radix}/>}
                <img src={numbers[digit]} alt={digit}/>
            </div>
            <div className={classes['victory-pic'] + ' ' +
                classes.animate + ' ' + classes.fourth}>
                <img src={victoryImg} alt=""/>
            </div>
            <button className={classes.animate + ' ' + classes.fourth}
               onClick={continueHandler} >Continue</button>
        </div>
    );
};

export default GameWon;