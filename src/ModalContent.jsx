import styles from './modelContent.module.css';
import flowers from './flowers.jpg';
export default function ModalContent({ onClose }) {
    return (
        <div className={styles.wrapper}>
            <div>Gefeliciteerd met je verjaardag, Tijs!
                Ik wens dat dromen uitkomen, het lot lacht en de wereld om ons heen vriendelijk blijft.
                    Laat het leven lang, helder en gevuld zijn met aangename gebeurtenissen.
                        Ik wil je altijd gelukkig, rijk, mooi en gezond zien.</div>
            <img className={styles.flowers} src={flowers} alt=""flowers/>
            <button onClick={onClose}>Close</button>
        </div>
    );
}