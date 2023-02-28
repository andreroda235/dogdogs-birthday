import classes from './Beats.module.css';

export const beats = (streak) => {  
    const value = streak <= 3 ? streak : 3;

    return (Math.random() > 0.5 ? classes['beat-' + value] : classes['head-bob-' + value]); 
};