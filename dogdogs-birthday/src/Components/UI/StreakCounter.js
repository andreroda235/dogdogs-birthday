import { useSelector } from "react-redux";

import classes from './StreakCounter.module.css';

import numbers from '../../util/number-imports';

const StreakCounter = () => {
    const streakCounter = useSelector(state => state.giftStreak);

    const radix = Math.floor(streakCounter / 10);
    const digit = streakCounter % 10;

    return (
        <div className={classes['streak-counter']}>
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