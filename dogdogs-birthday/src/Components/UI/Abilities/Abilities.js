import { useSelector } from 'react-redux';

import AbilityCard from './AbilityCard';

import classes from './Abilities.module.css';

import SasukeImg from '../../../Assets/Images/sasuke.png';
import EricaImg from '../../../Assets/Images/erica.png';
import ConnectedImg from '../../../Assets/Images/connected.png';

const Abilities = () => {
    const abilityCounter = useSelector(state => state.abilityCounter);
    console.log(abilityCounter);

    return (
        <div className={classes.abilities}>
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
                <img src={EricaImg} alt="sasuke"/>
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