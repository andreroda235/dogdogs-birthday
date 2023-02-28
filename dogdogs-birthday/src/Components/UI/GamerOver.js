import { useDispatch, useSelector } from 'react-redux';


import backDropClasses from './Backdrop.module.css';

import classes from './GameOver.module.css';

import numbers from '../../util/number-imports';
import gameOverImage from '../../Assets/Images/game-over.png';
import { reset, retry } from '../../Redux/gamestate-slice';

const GameOver = () => {
    const player = useSelector(state => state.player);
    const streak = useSelector(state => state.highestStreak);
    const dispatch = useDispatch();
    
    const radix = Math.floor(streak / 10);
    const digit = streak % 10;

    const retryHandler = () => {
        dispatch(retry());
    };

    const backToMenuHandler = () => {
        dispatch(reset());
    };

    return (
        <div className={classes['game-over'] + ' ' + 
            backDropClasses.backdrop + ' ' + 
            backDropClasses.black}>
            <h1 className={classes.animate + ' ' + classes.second}>GAME OVER</h1>
            <h2 className={classes['game-over-rip'] + ' ' + 
            classes.animate}>{'Rest in Peace'}</h2>
            <h2 className={classes['game-over-player'] + ' ' + 
            classes.animate}>{player}</h2>
            <h2 className={classes['game-over-streak'] + ' ' + 
            classes.animate + ' ' + classes.first}>Highest Streak:</h2>
            <div className={classes.streak + ' ' + classes.animate + ' ' + classes.first}>
                {radix !== 0 && <img src={numbers[radix]} alt={radix}/>}
                <img src={numbers[digit]} alt={digit}/>
            </div>
            <div className={classes['sad-pic'] + ' ' +
             classes.animate + ' ' + classes.second}>
                <img src={gameOverImage} alt=":("/>
            </div>

            <div className={classes.buttons + ' ' +
             classes.animate}>
                <button onClick={retryHandler}>Retry</button>
                <button onClick={backToMenuHandler}>Back to Menu</button>
            </div>

        </div>
    );
};

export default GameOver;