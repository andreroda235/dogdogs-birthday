import {createPortal} from "react-dom";


const layers = [
    'AnimationLayer_Card',
    'AnimationLayer_Ability',
    'SoundSystem'
];

const Portal = ({ children, to }) => {
    return createPortal(children, document.getElementById(layers[to]));
};

export default Portal;