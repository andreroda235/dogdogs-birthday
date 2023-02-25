import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initAnimationLayer } from "../../../Redux/gamestate-slice";
import { ANIMATION_TYPE_CARDFLIP } from "../../../util/constants";

import AnimationCardFLip from './AnimationCardFlip';

const AnimationLayer = () => {
    /* const animate = useSelector(state => state.animationLayer_Card); */
    const [initialized, setInitialized] = useState(false);
    const dispatch = useDispatch();
    const [animationReady, setAnimationReady] = useState(false);
    const animationData = useRef(undefined);
    const postAnimationFunction = useRef(undefined);

    const startAnimation = (data, postAnimationAction) => {
        console.log(postAnimationAction);
        animationData.current = data;
        postAnimationFunction.current = postAnimationAction;
        setAnimationReady(true);
    };

    useEffect(() => {
        if(!initialized){
            dispatch(initAnimationLayer({
                type: ANIMATION_TYPE_CARDFLIP, 
                startAnimation
            }));
            setInitialized(true);
        }
    });

    const animationEnd = () => {
        postAnimationFunction.current();
        setAnimationReady(false);
    };

    return (
        <>
            {animationReady && <AnimationCardFLip
                type={animationData.current.type}
                prize={animationData.current.prize}
                onAnimationEnd={animationEnd}
            />}
        </>
    );
};

export default AnimationLayer;