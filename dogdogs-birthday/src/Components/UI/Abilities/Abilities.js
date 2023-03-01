import { useSelector } from 'react-redux';

import AbilityCard from './AbilityCard';

import classes from './Abilities.module.css';

import SasukeImg from '../../../Assets/Images/sasuke.png';
import AkamaruImg from '../../../Assets/Images/akamaru.png';
import ConnectedImg from '../../../Assets/Images/connected.png';
import { beats } from '../Animation/Beats';

const Abilities = () => {
    /* const abilityCounter = useSelector(state => state.abilityCounter); */
    const currentStreak = useSelector(state => Math.floor(state.giftStreak/5));
    const streak1 = useSelector(state => state.streak1);
    const streak2 = useSelector(state => state.streak2);
    const streak3 = useSelector(state => state.streak3);

    console.log(streak1);

    return (
        <div className={classes.abilities + ' ' + beats(currentStreak)}>
            <AbilityCard
                index={1}
                key="ability-1"
                isFlipped={streak1}
            >
                <img src={SasukeImg} alt="sasuke"/>
            </AbilityCard>
            <AbilityCard
                index={2}
                key="ability-2"
                isFlipped={streak2}
            >
                <img src={AkamaruImg} alt="akamaru"/>
            </AbilityCard>
            <AbilityCard
                index={3}
                key="ability-3"
                isFlipped={streak3}
            >
                <img src={ConnectedImg} alt="connected"/>
            </AbilityCard>
        </div>
    );
};

export default Abilities;