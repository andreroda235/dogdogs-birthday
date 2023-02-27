import { useEffect, useRef, useState } from 'react';
import {useSelector} from 'react-redux';

import classes from './HealthBar.module.css';
import beatClasses from './Animation/Beats.module.css';

import healthbar from '../../Assets/Images/dogdog-health-bar.png';
import { beats } from './Animation/Beats';

//probably unecessary
const getHealthColor = (health) => {
    if(health <= 100 && health > 50)
        return 'full'
    if(health <= 50 && health > 25)
        return 'half';
    if(health <= 25 && health >= 0)
        return 'quarter';
};

const calcHealth = (health, maxHealth) => {
    const newHealth = Math.round((maxHealth * health) / 100);
    return newHealth;
};

const HealthBar = () => {
    const health = useSelector(state => state.health);
    const currentStreak = useSelector(state => Math.floor(state.giftStreak/5));
    const maxHealth = useRef(undefined);
    const [width, setWidth] = useState(undefined);


    useEffect(() => {
        let newWidth;
        if(!maxHealth.current){
            const max = document.getElementById('healthbar').offsetWidth;
            maxHealth.current = max;
            newWidth = calcHealth(health, max);
        } else 
            newWidth = calcHealth(health, maxHealth.current);
        setWidth(newWidth);
    }, [health]);

    const styles = {
        width: width + 'px'
    };

    return (
        <div className={classes['health-bar']}>
            <div className={classes['health-bar-inner'] + ' ' + beats(currentStreak)}>
                <div className={classes['health-background']}/>
                <div id='healthbar' style={width !== undefined ? styles : {}} className={classes.health + ' ' + classes[getHealthColor(health)]}/>
                <img src={healthbar} alt={health}/>
            </div>
        </div>
    );
};

export default HealthBar;