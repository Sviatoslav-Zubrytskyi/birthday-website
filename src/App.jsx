import './App.css';
import confetti from 'canvas-confetti';
import balloon from './baloon.png'
import giftBox from './1.png'
import giftCover from './2.png'
import {useState} from "react";
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.jsx';
import 'reactjs-popup/dist/index.css';

function App() {
    const [coverAnimate, setCoverAnimate] = useState("");
    const [showModal, setShowModal] = useState(false);
    //const [popUpExists, setPopUpExists] = useState(false)
    const revealGift = () => {
        setShowModal(true)
        confetti();
        setCoverAnimate("spin-animation")
        //setPopUpExists(true);
    }
    const randomValue = () => {
        return Math.floor(Math.random() * 20 + 10);
    }

    return (
        <div className="container">
            <div className="balloons">
                {
                    Array.from({length: 15}, (_, index) => (
                        <span style={{"--i": randomValue()}} key={index}>
                            <img className="bg-balloon" src={balloon} alt="balloon"/>
                        </span>
                    ))
                }
            </div>

            <div className="gift" onClick={revealGift}>
                <img src={giftCover} alt="cover" className={"gift-cover " + coverAnimate} id="cover"/>
                <img src={giftBox} alt="box" className="gift-box"/>
            </div>

            {showModal && createPortal(
                <ModalContent onClose={() => setShowModal(false)} />,
                document.querySelector(".container")
            )}
        </div>
    );
}

export default App;
