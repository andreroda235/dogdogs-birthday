import classes from './Beats.module.css';

export const beats = (streak) => {  
    return (Math.random() > 0.5 ? classes['beat-' + streak] : classes['head-bob-' + streak]); 
};