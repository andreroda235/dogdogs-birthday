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
            }
            audio.play();
        });
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);


    const newTrack = useCallback((src) => {
        audio.src = tracks[src];
        audio.play().catch(console.log('error'));
        setPlaying(true);
    }, []);

    /* const loop = () => {
        //TODO
    } */

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

    return {newTrack, loop, stop, playing, changeVolume, paralelTrack};
};