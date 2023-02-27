import { useSelector } from "react-redux";

import classes from './StreakCounter.module.css';

import numbers from '../../util/number-imports';
import { beats } from "./Animation/Beats";

const StreakCounter = () => {
    const streakCounter = useSelector(state => state.giftStreak);
    const currentStreak = Math.floor(streakCounter/5);
    const radix = Math.floor(streakCounter / 10);
    const digit = streakCounter % 10;

    return (
        <div className={classes['streak-counter'] + ' ' + beats(currentStreak)}>
            <div className={classes.container}>
                <div className={classes.numbers}>
                    {radix !== 0 && <img src={numbers[radix]} alt={radix}/>}
                    <img src={numbers[digit]} alt={digit}/>
                </div>
            </div>
        </div>
    );
};

export default StreakCounter;