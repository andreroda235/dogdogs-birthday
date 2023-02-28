
import { useSelector } from 'react-redux';

import classes from './Background.module.css';

import equalizerGif from '../../Assets/Images/equalizer.gif';
import enemyWP from '../../Assets/Images/enemy-wp.jpg';
import sasukeWP from '../../Assets/Images/sasuke-wp.jpg';
import akamarWP from '../../Assets/Images/akamaru-wp.jpg';
import connectedWP from '../../Assets/Images/connected-wp.jpg';

const Background = () => {
    const currentStreak = useSelector(state => Math.floor(state.giftStreak/5));
    const enemyStreak = useSelector(state => state.enemyStreak);
    const backgroundId = currentStreak <= 3 ? currentStreak : 3;
   /*  const gameState = useSelector(state => state.gameState); */

    const background = () => {
        let backgroundData = {
            class: classes['gradient-page'],
            image: undefined
        }
        if(enemyStreak >= 2){
            backgroundData.class = classes['enemy-background'];
            backgroundData.image = enemyWP;
            return backgroundData;
        }
        if(currentStreak >= 1){
            backgroundData.class = classes['background-' + backgroundId];
            switch(backgroundId){
                case 1: 
                    backgroundData.image = sasukeWP;
                    break;
                case 2: 
                    backgroundData.image = akamarWP;
                    break;
                case 3:
                    backgroundData.image = connectedWP;
                    break;
                default: break;
            }
            return backgroundData;
        }
        return backgroundData;
    };

    const backgroundData = background();

    return (
        <div className={classes.background + ' ' + backgroundData.class}>
            {(backgroundId >= 1 || enemyStreak >= 2) && 
            <>
                <img className={classes['character-img']} src={backgroundData.image} alt=""/>
                <img className={classes.equalizer} src={equalizerGif} alt="" />
            </>}
        </div>
    );
};

export default Background;