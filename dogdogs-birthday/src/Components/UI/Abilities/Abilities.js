import { useSelector } from 'react-redux';

import AbilityCard from './AbilityCard';

import classes from './Abilities.module.css';

import SasukeImg from '../../../Assets/Images/sasuke.png';
import AkamaruImg from '../../../Assets/Images/akamaru.png';
import ConnectedImg from '../../../Assets/Images/connected.png';
import { beats } from '../Animation/Beats';

const Abilities = () => {
    const abilityCounter = useSelector(state => state.abilityCounter);
    const currentStreak = useSelector(state => Math.floor(state.giftStreak/5));
    console.log(abilityCounter);

    return (
        <div className={classes.abilities + ' ' + beats(currentStreak)}>
            <AbilityCard
                index={1}
                key="ability-1"
                isFlipped={abilityCounter >= 1}
            >
                <img src={SasukeImg} alt="sasuke"/>
            </AbilityCard>
            <AbilityCard
                index={2}
                key="ability-2"
                isFlipped={abilityCounter >= 2}
            >
                <img src={AkamaruImg} alt="sasuke"/>
            </AbilityCard>
            <AbilityCard
                index={3}
                key="ability-3"
                isFlipped={abilityCounter >= 3}
            >
                <img src={ConnectedImg} alt="sasuke"/>
            </AbilityCard>
        </div>
    );
};

export default Abilities;