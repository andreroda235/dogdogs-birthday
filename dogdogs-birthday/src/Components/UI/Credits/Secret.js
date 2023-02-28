import { useSelector } from 'react-redux';
import JSZIP from 'jszip';
import {saveAs} from 'file-saver';

import Unlockable from '../Unlockable';

import classes from './Secret.module.css';
import backDropClasses from '../../UI/Backdrop.module.css';

import unlockable1 from '../../../Assets/Images/unlockable-1.png';
import unlockable2 from '../../../Assets/Images/unlockable-2.png';
import unlockable3 from '../../../Assets/Images/unlockable-3.png';
import { useEffect, useState } from 'react';

const Secret = () => {
    const [downloading, setDownloading] = useState(false);
    const highestStreak = useSelector(state => state.highestStreak); 
    const [slowTurn, setSlowTurn] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if(slowTurn < 3)
                setSlowTurn(prevState => prevState + 1);
          }, 1000)
      
          return () => clearTimeout(timeout)
    }); 

    const downloadHandler = async () => {
        setDownloading(true);

        const zip = new JSZIP();

        if(highestStreak >= 20) {
            try {
                const data = await fetch('unlockable-1.png');
                const image = await data.arrayBuffer();
                zip.file('secret-akamaru-1.png', image);
            } catch (error) {
                console.log(error);
                return;
            }
            
        }
        if(highestStreak >= 25) {
            try {
                const data = await fetch('unlockable-2.png');
                const image = await data.arrayBuffer();
                zip.file('secret-akamaru-2.png', image);
            } catch (error) {
                console.log(error);
                return;
            }
        }
        if(highestStreak === 30) {
            try {
                const data = await fetch('unlockable-3.png');
                const image = await data.arrayBuffer();
                zip.file('secret-akamaru-3.png', image);
            } catch (error) {
                console.log(error);
                return;
            }
        }

        zip.generateAsync({type: "blob"}).then(content => {
            saveAs(content, "trophies.zip");
            setDownloading(false)
        });
    };

    return (
        <div className={classes.secret  + ' ' + 
        backDropClasses.backdrop + ' ' + 
        backDropClasses.black}>
            <div className={classes.group }>
                <Unlockable
                    flipped = {slowTurn >= 1}
                    highestStreak={highestStreak}
                    threshold={20}
                >
                    <img src={unlockable1} alt=""/>
                </Unlockable>
                <Unlockable 
                    flipped = {slowTurn >= 2}
                    highestStreak={highestStreak}
                    threshold={25}
                >
                    <img src={unlockable2} alt=""/>
                </Unlockable>
                <Unlockable
                    flipped = {slowTurn >= 3}
                    highestStreak={highestStreak}
                    threshold={30}
                >
                    <img src={unlockable3} alt=""/>
                </Unlockable>
            </div>
            <button className={slowTurn >= Math.floor(highestStreak/5) - 3 && classes.animation} disabled={downloading} onClick={downloadHandler}>Download</button>
        </div>
    );
};

export default Secret;