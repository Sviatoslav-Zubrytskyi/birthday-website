import styles from './modelContent.module.css';
import flowers from './flowers.jpg';
export default function ModalContent({ onClose }) {
    return (
        <div className={styles.wrapper}>
            <div>З днем народження, моя улюблена матуся! Бажаю, щоб мрії виконувалися, доля посміхалася, а світ навколо залишався добрим. Нехай життя буде довгим, яскравим і наповненим приємними подіями. Хочу завжди бачити тебе щасливою, багатою, красивою і здоровою. </div>
            <img className={styles.flowers} src={flowers} alt=""flowers/>
            <button onClick={onClose}>Close</button>
        </div>
    );
}