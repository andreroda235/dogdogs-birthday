import { useState } from 'react';
import { useDispatch } from 'react-redux';

import classes from './MusicPlayer.module.css';

import musicLevelsGif from '../../../Assets/Images/music-values.gif';

const MusicPlayer = ({onVolumeChange}) => {
    const volumeChangeHandler = (event) => {
        onVolumeChange(event.target.value);
    };

    return (
        <div className={classes['music-player']}>
            <img src={musicLevelsGif} alt=""/>
            <input onChange={volumeChangeHandler} id="gainSlider" type="range" min="0" max="1" step="0.05"/>
        </div>
    );
};

export default MusicPlayer;