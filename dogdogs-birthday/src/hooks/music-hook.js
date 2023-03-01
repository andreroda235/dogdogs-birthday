import { useCallback, useEffect, useState } from "react";

export const useMusic = (trackCollection, loop) => {
    const [audio] = useState(new Audio());
    const [tracks] = useState(trackCollection);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        audio.addEventListener('ended', () => {
            if(!loop){
                audio.pause();
                setPlaying(false);
                return;
            }
            audio.play();
        });
        return () => {
            audio.removeEventListener('ended', () => {
                audio.pause();
                setPlaying(false);
            });
        };
    }, []);


    const newTrack = useCallback((src, newVolume, onPlayEnd, loop) => {
        audio.src = tracks[src];
        audio.play().then(() => {if(onPlayEnd)onPlayEnd();}).catch(console.log('error'));
        if(newVolume)
            audio.volume = newVolume;
        audio.loop=loop;
        setPlaying(true);
    }, []);

    const loopMusic = useCallback((loopMusic) => {
        audio.loop = loopMusic;
    },[]);

    const halveVolume = useCallback(() => {
        audio.volume = audio.volume / 2;
    }, []);

    const doubleVolume = useCallback(() => {
        audio.volume = audio.volume * 2;
    }, []);

    const paralelTrack = useCallback((src) => {
        const newAudio = new Audio();
        newAudio.src = tracks[src];
        newAudio.play();
    }, []);

    const changeVolume = useCallback((newVolume) => {
        audio.volume = newVolume;
    },[]);

    const stop = useCallback(() => {
        audio.pause();
        setPlaying(false);
    }, [audio]);

    return {newTrack, loop, stop, playing, changeVolume,
         paralelTrack, halveVolume, doubleVolume, loopMusic};
};