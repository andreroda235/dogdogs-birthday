import { useEffect, useRef, useState } from 'react';
import {useSelector} from 'react-redux';

import classes from './HealthBar.module.css';

import healthbar from '../../Assets/Images/dogdog-health-bar.png';


const healthStages = 
    { 1: 'full',
    0.5: 'half',
    0.25: 'quarter'}

//maybe unecessary
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
    /* const [health, setHealth] = useState(1); */
    const maxHealth = useRef(undefined);
    const [width, setWidth] = useState(undefined);

    useEffect(() => {
        console.log();
        let newWidth;
        if(!maxHealth.current){
            const max = document.getElementById('healthbar').offsetWidth;
            maxHealth.current = max;
            newWidth = calcHealth(health, max);
        }else {
            newWidth = calcHealth(health, maxHealth.current);
        }
        setWidth(newWidth);
    }, [health]);

    const styles = {
        width: width + 'px'
    };

    return (
        <div className={classes['health-bar']}>
            <div className={classes['health-bar-inner']}>
                <div id='healthbar' style={width !== undefined ? styles : {}} className={classes.health + ' ' + classes[getHealthColor(health)]}/>
                <img src={healthbar} alt={health}/>
            </div>
        </div>
    );
};

export default HealthBar;