import { useSelector } from 'react-redux';


import backDropClasses from './Backdrop.module.css';

import classes from './GameOver.module.css';

import numbers from '../../util/number-imports';
import gameOverImage from '../../Assets/Images/game-over.png';

const GameOver = () => {
    const player = useSelector(state => state.player);
    const streak = useSelector(state => state.highestStreak);
    
    const radix = Math.floor(streak / 10);
    const digit = streak % 10;

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
        </div>
    );
};

export default GameOver;