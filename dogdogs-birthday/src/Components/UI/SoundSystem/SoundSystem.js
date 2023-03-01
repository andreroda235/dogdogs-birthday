import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useMusic } from "../../../hooks/music-hook";
import { GAMESTATE_CREDITS, GAMESTATE_GAME_OVER, GAMESTATE_START_MENU, GAMESTATE_WIN, LAYER_TYPE_SOUNDSYSTEM, MUSIC_ENEMY_THEME, MUSIC_GAME_OVER, MUSIC_GAME_WON, MUSIC_MENU, SFX_ENEMY, SFX_STREAK_KILL, SOUND_TYPE_MUSIC, SOUND_TYPE_SOUNDEFFECTS } from "../../../util/constants";
import { musicTracks, SFX } from "../../../util/track-imports";
import Portal from "../Animation/Portal";
import MusicPlayer from "./MusicPlayer";

const SoundSystem = () => {
    const musicPlayer = useMusic(musicTracks, true);
    const giftStreak = useSelector(state => state.giftStreak);
    const streakResult = Math.floor(giftStreak / 5);
    const streak = streakResult <= 3 ? streakResult : 3;
    const gameState = useSelector(state => state.gameState);
    const enemyStreak = useSelector(state => state.enemyStreak);
    const soundEffects = useMusic(SFX, false);
    const enemySFX = useSelector(state => state.playEnemySFX);
    const abilityCounter = useSelector(state => state.abilityCounter);

    useEffect(() => {
        if(gameState === GAMESTATE_START_MENU){
            musicPlayer.newTrack(MUSIC_MENU, 0.5);
            return;
        }

        if(gameState === GAMESTATE_WIN){
            musicPlayer.newTrack(MUSIC_GAME_WON);
            return;
        }
        
        if (gameState === GAMESTATE_GAME_OVER){
            musicPlayer.newTrack(MUSIC_GAME_OVER);
            return;
        }
        
        
        if(gameState === GAMESTATE_CREDITS) {
            musicPlayer.newTrack(4);
            return;
        }
        
        if(gameState > GAMESTATE_CREDITS){
            musicPlayer.stop();
            return;
        }

        if(enemyStreak >= 2 && gameState !== GAMESTATE_GAME_OVER) {
            musicPlayer.newTrack(MUSIC_ENEMY_THEME);
            return;
        }
        if(streak !== 0){
            musicPlayer.newTrack(streak-1);
            return;
        }

            musicPlayer.stop();
    }, [streak, gameState, enemyStreak]);

    useEffect(() => {
        console.log('enemyStreak ' + enemyStreak);
        /* if(enemyStreak > 0 && gameState !== GAMESTATE_GAME_OVER){
            soundEffects.newTrack(SFX_ENEMY);
        } */

        if(enemySFX) {
            if(abilityCounter === 0){
                if(musicPlayer.playing)
                    musicPlayer.halveVolume();
                soundEffects.newTrack(SFX_ENEMY, 0.3);
                return;
            }
        }

        if(!enemySFX && soundEffects.playing){
            soundEffects.stop();
            return
        }

        if(giftStreak === 0 && enemyStreak >= 1 && musicPlayer.playing){
            soundEffects.newTrack(SFX_STREAK_KILL);
        }
    }, [enemyStreak, gameState, enemySFX, abilityCounter]); 

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