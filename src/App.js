import './App.css';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import balloon from './baloon.png'
function App() {
    const makeConfetti = confetti();
    window.onload = makeConfetti;
    return (
        <div className="cantainer">
            <div className="balloons">
                <span style={{ "--i": 15 }}><img className="bg-balloon" src={balloon} alt="balloon"/></span>
                <span style={{ "--i": 20 }}><img className="bg-balloon" src={balloon} alt="balloon"/></span>
                <span style={{ "--i": 23 }}><img className="bg-balloon" src={balloon} alt="balloon"/></span>
                <span style={{ "--i": 9 }}><img className="bg-balloon" src={balloon} alt="balloon"/></span>
                <span style={{ "--i": 13 }}><img className="bg-balloon" src={balloon} alt="balloon"/></span>
                <span style={{ "--i": 11 }}><img className="bg-balloon" src={balloon} alt="balloon"/></span>
                <span style={{ "--i": 17 }}><img className="bg-balloon" src={balloon} alt="balloon"/></span>
                <span style={{ "--i": 19 }}><img className="bg-balloon" src={balloon} alt="balloon"/></span>
                <span style={{ "--i": 30 }}><img className="bg-balloon" src={balloon} alt="balloon"/></span>

            </div>
        </div>
    );
}

export default App;
