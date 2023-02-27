import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMusic } from "../../../hooks/music-hook";
import { GAMESTATE_GAME_OVER, LAYER_TYPE_SOUNDSYSTEM, MUSIC_ENEMY_THEME, MUSIC_GAME_OVER, SFX_ENEMY, SFX_STREAK_KILL, SOUND_TYPE_MUSIC, SOUND_TYPE_SOUNDEFFECTS } from "../../../util/constants";
import { musicTracks, SFX } from "../../../util/track-imports";
import Portal from "../Animation/Portal";
import MusicPlayer from "./MusicPlayer";

const SoundSystem = () => {
    const musicPlayer = useMusic(musicTracks, true);
    const giftStreak = useSelector(state => state.giftStreak);
    const streak = Math.floor(giftStreak / 5);
    const gameState = useSelector(state => state.gameState);
    const enemyStreak = useSelector(state => state.enemyStreak);
    const soundEffects = useMusic(SFX, false);

    useEffect(() => {
        if(enemyStreak >= 2 && gameState !== GAMESTATE_GAME_OVER) {
            musicPlayer.newTrack(MUSIC_ENEMY_THEME);
            return;
        }
        if(streak !== 0){
            musicPlayer.newTrack(streak-1);
        } else if (gameState === GAMESTATE_GAME_OVER){
            musicPlayer.newTrack(MUSIC_GAME_OVER);
        } else {
            musicPlayer.stop();
        }
    }, [streak, gameState, enemyStreak]);

    useEffect(() => {
        console.log('enemyStreak ' + enemyStreak);
        /* if(enemyStreak > 0 && gameState !== GAMESTATE_GAME_OVER){
            soundEffects.newTrack(SFX_ENEMY);
        } */

        if(giftStreak === 0 && enemyStreak >= 1){
            soundEffects.paralelTrack(SFX_STREAK_KILL);
        }
    }, [enemyStreak, gameState]); 

    const playSFX = (sfx) => {
        soundEffects.newTrack(sfx);
    };

    const changeVolumeHandler = (value) => {
        musicPlayer.changeVolume(value);
    };

    return (
        <Portal to={LAYER_TYPE_SOUNDSYSTEM}>
            <MusicPlayer onVolumeChange={changeVolumeHandler}/>
        </Portal>
    );
};

export default SoundSystem;